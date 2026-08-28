import React, { useState, useEffect, useRef } from "react";
import AIAnalysis from "./AIAnalysis";
import CompletedLesson from "./CompletedLesson";
import imgMascottSedih from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Mascott-Sedih.png";
import "./SimulasiSpontanScreen.css";

// ─── Back Arrow Icon ─────────────────────────────────────────────────────────
const IconArrowLeft = ({ color = "#FFFFFF" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Exit Modal Component ───────────────────────────────────────────────────
function ExitSimulasiModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="simulasi-exit-modal-overlay">
      <div className="simulasi-exit-modal-card">
        <h3 className="simulasi-exit-modal-title">Keluar dari Simulasi?</h3>
        <p className="simulasi-exit-modal-desc">
          Kemajuan simulasi yang sedang berjalan tidak akan tersimpan jika kamu keluar sekarang.
        </p>
        <div className="simulasi-exit-modal-actions">
          <button
            type="button"
            className="simulasi-exit-btn-cancel"
            onClick={onClose}
          >
            Lanjut Simulasi
          </button>
          <button
            type="button"
            className="simulasi-exit-btn-confirm"
            onClick={onConfirm}
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Step 1: Topic Generated Page ───────────────────────────────────────────
function SpontanThemePage({ topic, onStart, onTopBarBack }) {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (countdown <= 0) {
      onStart();
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown, onStart]);

  return (
    <div className="simulasi-spontan-page" data-name="Spontan-Theme">
      {/* TopBar with Back Button */}
      <div className="simulasi-spontan-topbar">
        <button
          type="button"
          className="simulasi-spontan-back-btn"
          onClick={onTopBarBack}
          aria-label="Kembali"
        >
          <IconArrowLeft color="#FFFFFF" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="simulasi-spontan-content">
        <div className="simulasi-spontan-theme-wrapper">
          <p className="simulasi-spontan-theme-subtitle">
            Topik nya adalah
          </p>
          <h2 className="simulasi-spontan-theme-title">
            “{topic}”
          </h2>
        </div>

        {/* Auto start countdown text */}
        <p className="simulasi-spontan-countdown-text">
          Mulai otomatis dalam {countdown}
        </p>
      </div>

      {/* Single Bottom CTA Button */}
      <div className="simulasi-spontan-cta-wrapper">
        <button
          type="button"
          className="btn-spontan-start"
          onClick={onStart}
        >
          Mulai
        </button>
      </div>
    </div>
  );
}

// ─── Step 2: Speaking Screen (3 Minutes / 180s) ──────────────────────────────
function SpontanSpeakingPage({ topic, onFinish, onTopBarBack }) {
  const [secondsLeft, setSecondsLeft] = useState(180); // 3:00
  const [audioLevels, setAudioLevels] = useState([39, 15, 26, 26, 39]);
  const [showNoVoice, setShowNoVoice] = useState(false);
  const [audioKey, setAudioKey] = useState(0);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const streamRef = useRef(null);
  const animationFrameRef = useRef(null);
  const hasSpokenRef = useRef(false);
  const speechCountRef = useRef(0);

  // Timer countdown
  useEffect(() => {
    if (showNoVoice) return;
    if (secondsLeft <= 0) {
      handleFinishSpeaking();
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, showNoVoice]);

  // Real Microphone Stream & Wave Analyzer
  useEffect(() => {
    if (showNoVoice) return;
    let isMounted = true;

    async function initAudio() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (!isMounted) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;

        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 64;
        analyser.smoothingTimeConstant = 0.6;
        source.connect(analyser);
        analyserRef.current = analyser;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateWave = () => {
          if (!isMounted) return;
          analyser.getByteFrequencyData(dataArray);

          const b1 = dataArray[1] || 0;
          const b2 = dataArray[3] || 0;
          const b3 = dataArray[6] || 0;
          const b4 = dataArray[9] || 0;
          const b5 = dataArray[12] || 0;

          const avgVol = (b1 + b2 + b3 + b4 + b5) / 5;
          if (avgVol > 20) {
            speechCountRef.current = (speechCountRef.current || 0) + 1;
            if (speechCountRef.current >= 4) {
              hasSpokenRef.current = true;
            }
          }

          setAudioLevels([
            Math.max(12, Math.min(52, Math.round((b1 / 255) * 52))),
            Math.max(12, Math.min(52, Math.round((b2 / 255) * 52))),
            Math.max(12, Math.min(52, Math.round((b3 / 255) * 52))),
            Math.max(12, Math.min(52, Math.round((b4 / 255) * 52))),
            Math.max(12, Math.min(52, Math.round((b5 / 255) * 52))),
          ]);

          animationFrameRef.current = requestAnimationFrame(updateWave);
        };

        updateWave();
      } catch (_err) {
        // Fallback simulation wave if microphone is denied or unavailable
        const interval = setInterval(() => {
          if (!isMounted) return;
          setAudioLevels([
            14 + Math.round(Math.random() * 32),
            18 + Math.round(Math.random() * 30),
            22 + Math.round(Math.random() * 30),
            16 + Math.round(Math.random() * 32),
            12 + Math.round(Math.random() * 28),
          ]);
        }, 120);
        return () => clearInterval(interval);
      }
    }

    initAudio();

    return () => {
      isMounted = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [showNoVoice, audioKey]);

  const cleanAudio = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close().catch(() => {});
    }
  };

  const handleFinishSpeaking = () => {
    cleanAudio();
    if (!hasSpokenRef.current) {
      setShowNoVoice(true);
      return;
    }
    onFinish();
  };

  const handleRetry = () => {
    setShowNoVoice(false);
    setSecondsLeft(180);
    hasSpokenRef.current = false;
    speechCountRef.current = 0;
    setAudioKey((k) => k + 1);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // ── No Voice Detected State ──
  if (showNoVoice) {
    return (
      <div className="simulasi-spontan-page" data-name="Spontan-NoVoice">
        {/* TopBar with only back button (no progress bar) */}
        <div className="simulasi-spontan-topbar">
          <button
            type="button"
            className="simulasi-spontan-back-btn"
            onClick={onTopBarBack}
            aria-label="Kembali"
          >
            <IconArrowLeft color="#FFFFFF" />
          </button>
        </div>

        {/* Mascot Sedih Stage Illustration + Text */}
        <div className="simulasi-spontan-novoice-content">
          <div className="simulasi-spontan-novoice-hero-wrapper">
            <img
              src={imgMascottSedih}
              alt="Suaramu tidak terdengar"
              className="simulasi-spontan-novoice-hero-img"
            />
          </div>

          <div className="simulasi-spontan-novoice-text-wrapper">
            <h2 className="simulasi-spontan-novoice-title">
              Suaramu tidak terdengar...
            </h2>
            <p className="simulasi-spontan-novoice-subtitle">
              Pastikan mikrofonmu aktif dan tidak tertutup. Kalau semuanya sudah siap, kita bisa mulai lagi.
            </p>
          </div>
        </div>

        {/* Single Action Button Footer */}
        <div className="simulasi-spontan-novoice-footer">
          <button
            type="button"
            className="btn-spontan-start"
            onClick={handleRetry}
          >
            Ulangi lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="simulasi-spontan-page" data-name="Spontan-Speaking">
      {/* TopBar */}
      <div className="simulasi-spontan-topbar">
        <button
          type="button"
          className="simulasi-spontan-back-btn"
          onClick={onTopBarBack}
          aria-label="Keluar Simulasi"
        >
          <IconArrowLeft color="#FFFFFF" />
        </button>
      </div>

      {/* Main Speaking Body */}
      <div className="simulasi-speaking-content">
        {/* Topic Header above the timer circle */}
        <div className="simulasi-speaking-topic-wrapper">
          <p className="simulasi-speaking-topic-subtitle">
            Topik nya adalah
          </p>
          <h2 className="simulasi-speaking-topic-title">
            “{topic}”
          </h2>
        </div>

        {/* Big Circular 3:00 Timer */}
        <div className="simulasi-speaking-circle">
          <span className="simulasi-speaking-timer">
            {formatTime(secondsLeft)}
          </span>
        </div>

        {/* Audio Wave Visualizer */}
        <div className="simulasi-speaking-wave-container" aria-hidden="true">
          {audioLevels.map((height, idx) => (
            <div
              key={idx}
              className="simulasi-speaking-wave-bar"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Red Selesai Bicara Button */}
      <div className="simulasi-speaking-cta-wrapper">
        <button
          type="button"
          className="btn-spontan-finish-speaking"
          onClick={handleFinishSpeaking}
        >
          Selesai Bicara
        </button>
      </div>
    </div>
  );
}

// ─── Main SimulasiSpontanScreen Orchestrator ─────────────────────────────────
export default function SimulasiSpontanScreen({ onBack, onFinish }) {
  // step: "theme" | "speaking" | "analysis" | "completed"
  const [step, setStep] = useState("theme");
  const [showExitModal, setShowExitModal] = useState(false);

  const topicText = "Apakah belajar sambil mendengarkan musik membuatmu lebih fokus?";

  const handleTopBarBack = () => {
    setShowExitModal(true);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    onBack?.();
  };

  const handleStartSpeaking = () => {
    setStep("speaking");
  };

  const handleFinishSpeaking = () => {
    setStep("analysis");
  };

  const handleAnalysisContinue = () => {
    setStep("completed");
  };

  return (
    <div className="simulasi-spontan-screen">
      {step === "theme" && (
        <SpontanThemePage
          topic={topicText}
          onStart={handleStartSpeaking}
          onTopBarBack={handleTopBarBack}
        />
      )}

      {step === "speaking" && (
        <SpontanSpeakingPage
          topic={topicText}
          onFinish={handleFinishSpeaking}
          onTopBarBack={handleTopBarBack}
        />
      )}

      {step === "analysis" && (
        <AIAnalysis
          hideArgument={true}
          onContinue={handleAnalysisContinue}
        />
      )}

      {step === "completed" && (
        <CompletedLesson
          onFinish={onFinish}
          xpEarned={95}
        />
      )}

      {/* Exit Confirmation Modal */}
      <ExitSimulasiModal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        onConfirm={handleConfirmExit}
      />
    </div>
  );
}
