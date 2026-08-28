import React, { useState, useRef, useEffect } from "react";
import "./Questionnaires.css";

// ─── Asset Imports ───────────────────────────────────────────────────────────
import q1Illustration from "../assets/pages_assets/questionnaires/q1_illustration.png";
import q2Illustration from "../assets/pages_assets/questionnaires/q2_illustration.png";
import q3Illustration from "../assets/pages_assets/questionnaires/q3_illustration.png";
import q4Illustration from "../assets/pages_assets/questionnaires/q4_illustration.png";
import q5Illustration from "../assets/pages_assets/questionnaires/q5_illustration.png";
import q6Illustration from "../assets/pages_assets/questionnaires/q6_illustration.png";
import arrowLeftIcon from "../assets/pages_assets/questionnaires/arrow_left.svg";
import recordBtn from "../assets/pages_assets/questionnaires/record_btn.svg";
import recordDot from "../assets/pages_assets/questionnaires/record_dot.svg";

// ─── Question Dataset ─────────────────────────────────────────────────────────
export const DEFAULT_QUESTIONS = [
  {
    id: "q1",
    step: 1,
    title: "Kamu paling sering butuh ngomong di depan orang buat apa?",
    type: "tags_multi",
    illustration: q1Illustration,
    options: [
      { id: "kuliah", label: "Presentasi kelas/kuliah" },
      { id: "lomba", label: "Pitching lomba" },
      { id: "kantor", label: "Rapat atau kerjaan kantor" },
      { id: "interview", label: "Interview kerja atau beasiswa" },
      { id: "networking", label: "Networking & kenalan orang baru" },
      { id: "mc", label: "MC atau public speaking formal" },
      { id: "other", label: "Yang lain..." },
    ],
  },
  {
    id: "q2",
    step: 2,
    title: "Seberapa sering kamu harus ngomong di depan orang lain?",
    type: "radio",
    illustration: q2Illustration,
    options: [
      { id: "daily", label: "Hampir setiap hari" },
      { id: "weekly", label: "Beberapa kali seminggu" },
      { id: "monthly", label: "Beberapa kali sebulan" },
      { id: "rare", label: "Jarang banget" },
    ],
  },
  {
    id: "q3",
    step: 3,
    title:
      "Kalau harus ngomong di depan umum sekarang, seberapa deg-degan kamu?",
    type: "slider",
    illustration: q3Illustration,
    min: 1,
    max: 10,
    defaultValue: 5,
    minLabel: "Santai Aja",
    maxLabel: "Panik Banget",
  },
  {
    id: "q4",
    step: 4,
    title: "Momen apa yang paling bikin kamu blank atau gugup parah?",
    type: "radio",
    illustration: q4Illustration,
    options: [
      { id: "mendadak", label: "Pas harus jawab pertanyaan mendadak" },
      { id: "penting", label: "Pas ngomong di depan orang penting" },
      { id: "improvisasi", label: "Pas harus improvisasi tanpa naskah" },
      { id: "semua_mata", label: "Pas semua mata tertuju ke aku" },
      { id: "always", label: "Dari awal sampai akhir gugup terus" },
    ],
  },
  {
    id: "q5",
    step: 5,
    title: "Kalau harus mulai latihan, kamu lebih nyaman yang gimana?",
    type: "radio",
    illustration: q5Illustration,
    options: [
      { id: "sendiri", label: "Latihan sendiri dulu, pelan-pelan" },
      {
        id: "paksa",
        label: "Langsung coba di depan beberapa orang biar kepaksa berani",
      },
      {
        id: "stepbystep",
        label: "Ikutin panduan step-by-step, jangan buru-buru",
      },
      {
        id: "sistem",
        label: "Terserah sistem aja, yang penting cepat kelihatan hasilnya",
      },
    ],
  },
  {
    id: "q6",
    step: 6,
    title:
      "Kalau berhasil lebih pede ngomong di depan umum, apa yang paling pengin kamu capai?",
    type: "radio",
    illustration: q6Illustration,
    options: [
      { id: "nilai", label: "Nilai presentasi/tugas lebih bagus" },
      { id: "lolos", label: "Lolos interview kerja/beasiswa impian" },
      { id: "speakup", label: "Berani speak up di rapat/organisasi" },
      { id: "grogi", label: "Nggak lagi grogi tiap ketemu orang baru" },
      { id: "buktiin", label: "Buktiin ke diri sendiri kalau aku bisa" },
    ],
  },
  {
    id: "q7",
    step: 7,
    title: "Langkah 7 dari 7",
    type: "video_record",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Multiple-select tag chips */
function TagsMultiInput({ question, value, onChange }) {
  const selected = Array.isArray(value) ? value : [];
  return (
    <div className="questionnaire-tags-wrapper" data-node-id="207:3169">
      {question.options.map((option) => {
        const isActive = selected.includes(option.id);
        return (
          <button
            key={option.id}
            type="button"
            className={`tag-chip ${isActive ? "active" : ""}`}
            onClick={() => {
              if (isActive) onChange(selected.filter((id) => id !== option.id));
              else onChange([...selected, option.id]);
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

/** Radio card list (single select) */
function RadioInput({ question, value, onChange }) {
  return (
    <div className="questionnaire-radio-list">
      {question.options.map((option) => {
        const isActive = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            className={`radio-card ${isActive ? "active" : ""}`}
            onClick={() => onChange(option.id)}
          >
            <span className="radio-indicator">
              <span className="radio-dot" />
            </span>
            <span className="radio-label">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/** Modern Interactive Slider Input (Slider Skala Normal & Responsif) */
function ModernSliderInput({ question, value, onChange }) {
  const min = question.min ?? 1;
  const max = question.max ?? 10;
  const current = value ?? question.defaultValue ?? 5;

  const percent = ((current - min) / (max - min)) * 100;

  // Generate tick stops
  const ticks = [];
  for (let i = min; i <= max; i++) {
    ticks.push(i);
  }

  // Dynamic theme color (Green for calm, Orange for intense)
  const isHigh = current > 5;
  const themeColor = isHigh ? "#E8753D" : "#24A981";

  return (
    <div className="modern-slider-container" data-node-id="207:3249">
      {/* Value Indicator Badge */}
      <div className="slider-value-display">
        <span
          className="slider-value-badge"
          style={{
            backgroundColor: `${themeColor}18`,
            borderColor: themeColor,
            color: themeColor,
          }}
        >
          Skala {current}:{" "}
          <strong>
            {current <= 3
              ? "Santai"
              : current <= 6
                ? "Agak Deg-degan"
                : current <= 8
                  ? "Gugup"
                  : "Panik Banget"}
          </strong>
        </span>
      </div>

      {/* Main Track & Interactive area */}
      <div className="slider-interactive-track">
        {/* Visual background dual-tone track */}
        <div className="slider-track-bg-left" />
        <div className="slider-track-bg-right" />

        {/* Dynamic progress fill */}
        <div
          className="slider-track-active-fill"
          style={{
            width: `${percent}%`,
            backgroundColor: `${themeColor}50`,
          }}
        />

        {/* Tick stop dots */}
        <div className="slider-ticks-row">
          {ticks.map((num) => {
            const tickPercent = ((num - min) / (max - min)) * 100;
            const isPassed = num <= current;
            return (
              <div
                key={num}
                className={`slider-tick-dot ${isPassed ? "passed" : ""}`}
                style={{
                  left: `${tickPercent}%`,
                  backgroundColor: isPassed
                    ? themeColor
                    : "rgba(36, 50, 56, 0.2)",
                }}
              />
            );
          })}
        </div>

        {/* Custom Draggable Thumb handle */}
        <div
          className="slider-custom-thumb"
          style={{
            left: `${percent}%`,
            borderColor: themeColor,
          }}
        >
          <div
            className="slider-thumb-inner"
            style={{ backgroundColor: themeColor }}
          />
        </div>

        {/* Native Range Input over the entire track for drag & touch */}
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={current}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-range-overlay"
          aria-label={question.title}
        />
      </div>

      {/* Bottom Boundary Labels */}
      <div className="slider-bottom-labels">
        <span className="slider-bottom-min">
          {question.minLabel || "Santai Aja"}
        </span>
        <span className="slider-bottom-max">
          {question.maxLabel || "Panik Banget"}
        </span>
      </div>
    </div>
  );
}

/** Custom Hook for accessing real device camera */
function useCamera(active = true) {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let currentStream = null;
    if (!active) return;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: true,
        })
        .then((s) => {
          currentStream = s;
          setStream(s);
        })
        .catch((err) => {
          console.warn(
            "Camera access not available or permission denied:",
            err,
          );
          setError(err);
        });
    }

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [active]);

  return { stream, error };
}

/** Step 7 – Screen 1: Video Record Introduction with Real Camera Preview */
function VideoRecordIntro({ onStart, onSkip }) {
  const { stream } = useCamera(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="video-record-intro" data-node-id="207:4828">
      <p className="video-record-subtitle" data-node-id="207:4862">
        Yuk rekam video singkat perkenalan diri kamu. Nggak perlu sempurna, ini
        cuma buat lihat titik awal kamu sebelum mulai latihan.
      </p>

      <div className="camera-frame-container" data-node-id="207:4860">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="camera-live-video"
        />
        {!stream && (
          <div className="camera-loading-placeholder">
            <div className="camera-loading-icon-spinner" />
            <p className="camera-loading-label">Menghubungkan kamera...</p>
          </div>
        )}
      </div>

      <div className="video-buttons-wrapper" data-node-id="207:4873">
        <button
          type="button"
          className="btn-questionnaire-submit"
          onClick={onStart}
          data-node-id="207:4838"
        >
          Mulai
        </button>
        <button
          type="button"
          className="btn-skip-text"
          onClick={onSkip}
          data-node-id="207:4866"
        >
          Skip
        </button>
      </div>
    </div>
  );
}

/** Step 7 – Screen 2: Real Camera Recording Mode with Audio/Video Capture */
function VideoRecording({ onFinishRecording }) {
  const { stream } = useCamera(true);
  const videoRef = useRef(null);
  const [seconds, setSeconds] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const mediaRecorderRef = useRef(null);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  // Real-time speech recognition for live analysis
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "id-ID";

        recognition.onresult = (event) => {
          let currentTranscript = "";
          for (let i = 0; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript + " ";
          }
          setTranscript(currentTranscript.trim());
        };

        recognitionRef.current = recognition;
      } catch (e) {
        console.warn("SpeechRecognition init error:", e);
      }
    }
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  const handleToggle = () => {
    if (isRecording) {
      clearInterval(timerRef.current);
      setIsRecording(false);

      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        try {
          mediaRecorderRef.current.stop();
        } catch (e) {}
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }

      // Finish recording and proceed to analysis
      setTimeout(() => {
        onFinishRecording({ transcript, duration: seconds });
      }, 500);
    } else {
      setIsRecording(true);
      timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);

      // Start MediaRecorder if supported
      if (stream && window.MediaRecorder) {
        try {
          const recorder = new MediaRecorder(stream);
          mediaRecorderRef.current = recorder;
          recorder.start();
        } catch (e) {
          console.warn("MediaRecorder start error:", e);
        }
      }

      // Start Speech Recognition
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch (e) {
          console.warn("Speech recognition error:", e);
        }
      }
    }
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <div className="video-recording-screen" data-node-id="207:4898">
      <p className="video-prompt-text" data-node-id="207:4907">
        &ldquo;Ceritain sedikit tentang dirimu seperti nama, asal, atau hal
        random yang lagi kamu suka akhir-akhir ini.&rdquo;
      </p>

      <div className="camera-frame-container recording" data-node-id="207:4900">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="camera-live-video"
        />
        {!stream && (
          <div className="camera-loading-placeholder">
            <div className="camera-loading-icon-spinner" />
            <p className="camera-loading-label">Menghubungkan kamera...</p>
          </div>
        )}

        {/* Timer overlay badge */}
        <div
          className={`recording-timer-badge ${isRecording ? "is-recording" : ""}`}
          data-node-id="207:4909"
        >
          <img src={recordDot} alt="" className="rec-dot" />
          <span className="rec-time" data-node-id="207:4910">
            {formatTime(seconds)}
          </span>
        </div>

        {/* Live speech transcription subtitle */}
        {isRecording && transcript && (
          <div className="live-transcript-bubble">
            &ldquo;{transcript}&rdquo;
          </div>
        )}
      </div>

      {/* Record button */}
      <button
        type="button"
        className={`btn-record ${isRecording ? "is-recording" : ""}`}
        onClick={handleToggle}
        aria-label={isRecording ? "Berhenti rekam" : "Mulai rekam"}
        data-node-id="212:4915"
      >
        {isRecording ? (
          <span className="record-stop-square" />
        ) : (
          <img src={recordBtn} alt="Record" className="record-icon" />
        )}
      </button>
    </div>
  );
}

// ─── Main Questionnaire Component ─────────────────────────────────────────────
export default function Questionnaires({
  questions = DEFAULT_QUESTIONS,
  onBackToOnboarding,
  onFinish,
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  // Step-7 sub-screen: "intro" | "recording"
  const [step7Screen, setStep7Screen] = useState("intro");

  const totalSteps = questions.length;
  const currentQuestion = questions[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;

  // Generic answer setter
  const setAnswer = (qId, val) =>
    setAnswers((prev) => ({ ...prev, [qId]: val }));

  const handleNext = () => {
    if (isLastStep) {
      if (onFinish) onFinish(answers);
    } else {
      setCurrentStepIndex((i) => i + 1);
    }
  };

  const handleBack = () => {
    if (
      currentQuestion.type === "video_record" &&
      step7Screen === "recording"
    ) {
      setStep7Screen("intro");
      return;
    }
    if (isFirstStep) {
      if (onBackToOnboarding) onBackToOnboarding();
    } else {
      setCurrentStepIndex((i) => i - 1);
    }
  };

  // Render the answer input based on type
  const renderBody = () => {
    const q = currentQuestion;
    const val = answers[q.id];

    if (q.type === "video_record") {
      if (step7Screen === "intro") {
        return (
          <VideoRecordIntro
            onStart={() => setStep7Screen("recording")}
            onSkip={handleNext}
          />
        );
      }
      return (
        <VideoRecording
          onFinishRecording={() => {
            setAnswer(q.id, "recorded");
            handleNext();
          }}
        />
      );
    }

    return (
      <>
        {/* Question Title + Illustration */}
        <div className="question-header-content" data-node-id="207:3166">
          <h1 className="question-title" data-node-id="207:3167">
            {q.title}
          </h1>
          {q.illustration && (
            <div
              className="question-illustration-container"
              data-node-id="207:3168"
            >
              <img
                src={q.illustration}
                alt=""
                className="question-illustration"
              />
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="question-input-area">
          {q.type === "tags_multi" && (
            <TagsMultiInput
              question={q}
              value={val}
              onChange={(v) => setAnswer(q.id, v)}
            />
          )}
          {q.type === "radio" && (
            <RadioInput
              question={q}
              value={val}
              onChange={(v) => setAnswer(q.id, v)}
            />
          )}
          {(q.type === "slider" ||
            q.type === "scale" ||
            q.type === "centered_slider" ||
            q.type === "scale_boxes") && (
            <ModernSliderInput
              question={q}
              value={val}
              onChange={(v) => setAnswer(q.id, v)}
            />
          )}
        </div>

        {/* Bottom CTA */}
        <div className="questionnaire-footer" data-node-id="207:3174">
          <button
            type="button"
            className="btn-questionnaire-submit"
            onClick={handleNext}
            data-node-id="207:3175"
          >
            {isLastStep ? "Selesai" : "Lanjut"}
          </button>
        </div>
      </>
    );
  };

  return (
    <div
      className="questionnaire-screen"
      data-node-id="207:3141"
      data-name="OnBoarding-Questionnaire"
    >
      {/* ── Sticky TopBar ─────────────────────────────────────── */}
      <header className="questionnaire-topbar" data-node-id="207:3142">
        <div className="segmented-progress-bar" data-node-id="207:3144">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`progress-segment ${index <= currentStepIndex ? "filled" : ""}`}
            />
          ))}
        </div>

        <div className="topbar-nav-row" data-node-id="207:3159">
          <button
            type="button"
            className={`btn-nav-back ${isFirstStep && currentQuestion.type !== "video_record" ? "is-first-step" : ""}`}
            onClick={handleBack}
            aria-label="Kembali"
          >
            <img src={arrowLeftIcon} alt="Back" className="nav-back-icon" />
          </button>
          <p className="step-counter-text">
            {currentStepIndex + 1} dari {totalSteps}
          </p>
        </div>
      </header>

      {/* ── Main Form Section ─────────────────────────────────── */}
      <main className="questionnaire-form-section" data-node-id="207:3165">
        {renderBody()}
      </main>
    </div>
  );
}
