import React, { useState, useRef, useEffect } from "react";
import LessonAffirmation from "./LessonAffirmation";
import LessonModul7Screen from "./LessonModul7Screen";
import CompletedLesson from "./CompletedLesson";
import "./LessonScreen.css";

// ─── Assets ──────────────────────────────────────────────────────────────────
// Page 1 assets
import imgGugup from "../assets/pages_assets/lessons/lesson1-modul2/page1/Image-Gugup.png";
import imgTenang from "../assets/pages_assets/lessons/lesson1-modul2/page1/Image-Tenang.png";
import ritmKencang from "../assets/pages_assets/lessons/lesson1-modul2/page1/Ritme-Kencang.svg";
import ritmesSantai from "../assets/pages_assets/lessons/lesson1-modul2/page1/Ritme-Santai.svg";

// Page 2 assets
import imgTarik from "../assets/pages_assets/lessons/lesson1-modul2/page2/Image-Tarik.png";
import imgTahan from "../assets/pages_assets/lessons/lesson1-modul2/page2/Image-Tahan.png";
import imgHembuskan from "../assets/pages_assets/lessons/lesson1-modul2/page2/Image-Hembuskan.png";

// Page 4 assets
import videoHaleAnimation from "../assets/pages_assets/lessons/lesson1-modul2/page4/Hale-Animation.mp4";
import tutorialBanner from "../assets/pages_assets/lessons/lesson1-modul2/page4/Tutorial-Napas-Banner.svg";

// Page 5 assets
import relaxCloud from "../assets/pages_assets/lessons/lesson1-modul2/page5/Relax-Cloud.png";

// Completed Lesson XP video asset
import videoGainXP from "../assets/pages_assets/gain_xp/Video-Gain-XP.webm";

// ─── Back Arrow Icon ─────────────────────────────────────────────────────────
const IconArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#243238" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Exit Lesson Confirmation Modal ──────────────────────────────────────────
export function ExitLessonModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="exit-lesson-modal-overlay" onClick={onClose}>
      <div className="exit-lesson-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="exit-lesson-modal-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#E8753D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="exit-lesson-modal-title">Keluar dari Pelajaran?</h3>
        <p className="exit-lesson-modal-desc">
          Progres latihanmu saat ini tidak akan tersimpan jika kamu keluar sekarang.
        </p>
        <div className="exit-lesson-modal-actions">
          <button
            type="button"
            className="btn-exit-modal-resume"
            onClick={onClose}
          >
            Lanjut Belajar
          </button>
          <button
            type="button"
            className="btn-exit-modal-exit"
            onClick={onConfirm}
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── TopBar with progress bar ─────────────────────────────────────────────────
function LessonTopBar({ currentStep, totalSteps, onTopBarBack }) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="lesson-topbar" data-node-id="281:944">
      <button
        type="button"
        className="lesson-back-btn"
        onClick={onTopBarBack}
        aria-label="Keluar Pelajaran"
        data-node-id="281:945"
      >
        <IconArrowLeft />
      </button>
      <div className="lesson-progress-bar" data-node-id="281:949">
        <div className="lesson-progress-track" data-node-id="281:950">
          <div
            className="lesson-progress-fill"
            style={{ width: `${progress}%` }}
            data-node-id="281:951"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Page 1: Gugup vs Tenang (node 228:257) ──────────────────────────────────
function LessonPage1({ onNext, onTopBarBack }) {
  return (
    <div className="lesson-page lesson-page-1" data-node-id="228:257" data-name="Lesson-TarikNapas">
      <LessonTopBar currentStep={1} totalSteps={5} onTopBarBack={onTopBarBack} />

      {/* Main Content Area */}
      <div className="lesson-p1-content" data-node-id="256:825">
        <h2 className="lesson-p1-title" data-node-id="266:854">
          Saat gugup, napas jadi berantakan
        </h2>

        {/* Comparison Cards Wrapper */}
        <div className="lesson-p1-cards-wrapper" data-node-id="264:852">
          {/* Card Gugup */}
          <div className="lesson-p1-card" data-node-id="263:849" data-name="CardButton-Gugup">
            <div className="lesson-p1-card-img-wrap" data-node-id="266:859">
              <img src={imgGugup} alt="Saat Gugup" className="lesson-p1-card-img" />
            </div>
            <div className="lesson-p1-card-ritme-wrap" data-node-id="268:864">
              <img src={ritmKencang} alt="Ritme Kencang" className="lesson-p1-card-ritme" />
            </div>
          </div>

          {/* Card Tenang */}
          <div className="lesson-p1-card" data-node-id="264:851" data-name="CardButton-Tenang">
            <div className="lesson-p1-card-img-wrap" data-node-id="266:857">
              <img src={imgTenang} alt="Saat Tenang" className="lesson-p1-card-img" />
            </div>
            <div className="lesson-p1-card-ritme-wrap" data-node-id="268:869">
              <img src={ritmesSantai} alt="Ritme Santai" className="lesson-p1-card-ritme" />
            </div>
          </div>
        </div>

        {/* Caption description */}
        <div className="lesson-p1-desc" data-node-id="264:850">
          <p>Napas cepat &amp; dangkal bikin otak makin panik.</p>
          <p>Yuk kita pelan-pelan balikin ke ritme yang tenang.</p>
        </div>
      </div>

      {/* Fixed bottom CTA Button */}
      <div className="lesson-cta-wrapper">
        <button
          type="button"
          className="btn-lesson-finish"
          onClick={onNext}
          data-node-id="261:843"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Page 2: Teknik 4-7-8 (node 268:876) ────────────────────────────────────
function LessonPage2({ onNext, onBack, onTopBarBack }) {
  const steps = [
    {
      key: "tarik",
      img: imgTarik,
      text: "Tarik Napas 4 detik melalui hidung",
      nodeId: "268:931",
      imgNodeId: "268:919",
      textNodeId: "268:932",
    },
    {
      key: "tahan",
      img: imgTahan,
      text: "Tahan selama 7 detik",
      nodeId: "268:930",
      imgNodeId: "268:927",
      textNodeId: "268:933",
    },
    {
      key: "hembuskan",
      img: imgHembuskan,
      text: "Hembuskan selama 8 detik melalui mulut",
      nodeId: "268:929",
      imgNodeId: "268:928",
      textNodeId: "268:935",
    },
  ];

  return (
    <div className="lesson-page lesson-page-2" data-node-id="268:876" data-name="Lesson-TarikNapas">
      <LessonTopBar currentStep={2} totalSteps={5} onTopBarBack={onTopBarBack} />

      {/* Main Content Area */}
      <div className="lesson-p2-content" data-node-id="268:885">
        <h2 className="lesson-p2-title" data-node-id="268:886">
          Kenalan sama Teknik 4-7-8
        </h2>

        {/* 3 Step Cards Wrapper */}
        <div className="lesson-p2-cards-wrapper" data-node-id="268:887">
          {steps.map((step) => (
            <div key={step.key} className="lesson-p2-card" data-node-id={step.nodeId}>
              <div className="lesson-p2-card-img-wrap" data-node-id={step.imgNodeId}>
                <img src={step.img} alt={step.text} className="lesson-p2-card-img" />
              </div>
              <p className="lesson-p2-card-text" data-node-id={step.textNodeId}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Caption description */}
        <p className="lesson-p2-desc" data-node-id="268:894">
          Terbukti secara ilmiah dapat membantu tubuh merasa lebih tenang dalam hitungan detik. Gunakan sebelum tidur, sebelum ujian, atau saat akan tampil di depan umum.
        </p>
      </div>

      {/* Dual bottom CTA Buttons */}
      <div className="lesson-dual-cta-wrapper" data-node-id="268:895">
        <button
          type="button"
          className="btn-lesson-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-lesson-finish btn-lesson-next--flex"
          onClick={onNext}
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Page 3: Seberapa Gugup Kamu? (node 279:258) ───────────────────────────
function LessonPage3({ onNext, onBack, onTopBarBack }) {
  // Slider value from -5 (Santai Aja) to +5 (Gugup Banget), center is 0
  const [sliderValue, setSliderValue] = useState(0);
  const min = -5;
  const max = 5;
  const percent = ((sliderValue - min) / (max - min)) * 100;

  const isHigh = sliderValue > 0;
  const themeColor = isHigh ? "#E8753D" : "#24A981";

  const ticks = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="lesson-page lesson-page-3" data-node-id="279:258" data-name="Lesson-TarikNapas">
      <LessonTopBar currentStep={3} totalSteps={5} onTopBarBack={onTopBarBack} />

      {/* Main Content Area */}
      <div className="lesson-p3-content" data-node-id="279:267">
        <h2 className="lesson-p3-title" data-node-id="279:268">
          Sebelum mulai,
          <br />
          seberapa gugup kamu?
        </h2>

        {/* Scale Slider matching Questionnaire */}
        <div className="lesson-p3-scale-container" data-node-id="279:282">
          <div className="lesson-p3-slider-box" data-node-id="279:283">
            {/* Dual-tone background tracks */}
            <div className="slider-track-bg-left" />
            <div className="slider-track-bg-right" />

            {/* Active progress fill */}
            <div
              className="slider-track-active-fill"
              style={{
                width: `${percent}%`,
                backgroundColor: `${themeColor}40`,
              }}
            />

            {/* 11 Tick Stop Dots */}
            <div className="slider-ticks-row">
              {ticks.map((val) => {
                const tickPercent = ((val - min) / (max - min)) * 100;
                const isPassed = val <= sliderValue;
                return (
                  <div
                    key={val}
                    className={`slider-tick-dot ${isPassed ? "passed" : ""}`}
                    style={{
                      left: `${tickPercent}%`,
                      backgroundColor: isPassed ? themeColor : "rgba(36, 50, 56, 0.2)",
                    }}
                  />
                );
              })}
            </div>

            {/* Custom Draggable Thumb Handle matching Questionnaire */}
            <div
              className="slider-custom-thumb"
              style={{
                left: `calc(12px + (${percent} / 100) * (100% - 24px))`,
                borderColor: themeColor,
              }}
            >
              <div
                className="slider-thumb-inner"
                style={{ backgroundColor: themeColor }}
              />
            </div>

            {/* Native Range Input for smooth drag & touch */}
            <input
              type="range"
              min={min}
              max={max}
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
              className="slider-range-overlay"
              aria-label="Tingkat kegugupan"
            />
          </div>

          {/* Scale Labels */}
          <div className="lesson-p3-scale-labels" data-node-id="279:284">
            <span className="label-santai" data-node-id="279:285">Santai Aja</span>
            <span className="label-gugup" data-node-id="279:286">Gugup Banget</span>
          </div>
        </div>
      </div>

      {/* Dual bottom CTA Buttons */}
      <div className="lesson-dual-cta-wrapper" data-node-id="279:280">
        <button
          type="button"
          className="btn-lesson-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-lesson-finish btn-lesson-next--flex"
          onClick={onNext}
        >
          Mulai, Latihan Napas
        </button>
      </div>
    </div>
  );
}

// ─── Page 4: Video Animasi Ritme Napas (node 279:407) ─────────────────────────
function LessonPage4({ onNext, onTopBarBack }) {
  const [cycle, setCycle] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const videoRef = useRef(null);

  // Each time the video ends, increment cycle until 4, then dissolve video and show "Selesai"
  const handleVideoEnded = () => {
    if (cycle < 4) {
      setCycle((prev) => prev + 1);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      setIsCompleted(true);
    }
  };

  // Jump immediately to 4th loop at second 12.5
  const handleSkip = () => {
    if (!isCompleted) {
      setCycle(4);
      if (videoRef.current) {
        videoRef.current.currentTime = 12.5;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    if (videoRef.current && !isCompleted) {
      videoRef.current.play().catch(() => {});
    }
  }, [cycle, isCompleted]);

  return (
    <div className="lesson-page lesson-page-4" data-node-id="279:407" data-name="Lesson-TarikNapas">
      {/* Dark mode TopBar with 80% progress and Skip button */}
      <div className="lesson-topbar lesson-topbar-dark" data-node-id="279:408">
        <div className="lesson-topbar-nav-row">
          <button
            type="button"
            className="lesson-back-btn lesson-back-btn-white"
            onClick={onTopBarBack}
            aria-label="Keluar Pelajaran"
            data-node-id="279:409"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {!isCompleted && (
            <button
              type="button"
              className="btn-lesson-skip"
              onClick={handleSkip}
            >
              Skip
            </button>
          )}
        </div>
        <div className="lesson-progress-bar" data-node-id="279:413">
          <div className="lesson-progress-track lesson-progress-track-dark" data-node-id="279:414">
            <div
              className="lesson-progress-fill"
              style={{ width: "80%" }}
              data-node-id="279:415"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area (Dark) */}
      <div className="lesson-p4-content" data-node-id="279:416">
        {/* Top 4-7-8 Tutorial SVG Banner */}
        <img
          src={tutorialBanner}
          alt="Tutorial Napas 4-7-8"
          className="lesson-p4-banner-img"
          data-node-id="279:625"
        />

        {/* Center Breathing Video Animation & Finished State */}
        <div className="lesson-p4-center-area">
          <div
            className={`lesson-p4-video-container ${isCompleted ? "dissolved" : ""}`}
            data-node-id="302:1164"
          >
            <video
              ref={videoRef}
              src={videoHaleAnimation}
              className="lesson-p4-anim-video"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              aria-label="Animasi Ritme Napas"
            />
          </div>

          {/* Selesai text in center when finished */}
          {isCompleted && (
            <div className="lesson-p4-finished-state">
              <h3 className="lesson-p4-finished-text">Selesai</h3>
            </div>
          )}
        </div>

        {/* 1/4 -> 4/4 Counter */}
        <p className="lesson-p4-cycle-counter" data-node-id="281:848">
          {isCompleted ? "4/4" : `${cycle}/4`}
        </p>
      </div>

      {/* Fixed bottom CTA Button - only appears when 4x looping is completed */}
      {isCompleted && (
        <div className="lesson-cta-wrapper lesson-cta-dark lesson-cta-appear">
          <button
            type="button"
            className="btn-lesson-finish"
            onClick={onNext}
            data-node-id="279:423"
          >
            Lanjut
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Page 5: Conclusion (node 281:849) ──────────────────────────────────────
function LessonPage5({ onNext, onTopBarBack }) {
  return (
    <div className="lesson-page lesson-page-5" data-node-id="281:849">
      <LessonTopBar currentStep={5} totalSteps={5} onTopBarBack={onTopBarBack} />

      {/* Full-width hero image with relax cloud (no gradient overlay) */}
      <div className="lesson-p5-hero" data-node-id="281:910">
        <img
          src={relaxCloud}
          alt="Makin tenang"
          className="lesson-p5-hero-img"
          data-node-id="281:850"
        />
      </div>

      {/* Result section */}
      <div className="lesson-p5-result" data-node-id="281:851">
        <div className="lesson-p5-text-wrapper" data-node-id="281:852">
          <div className="lesson-p5-title-group" data-node-id="281:853">
            <p className="lesson-p5-question" data-node-id="281:854">Gimana?</p>
            <h3 className="lesson-p5-headline" data-node-id="281:855">Jauh lebih lega, kan?</h3>
          </div>
          <p className="lesson-p5-caption" data-node-id="281:856">
            Teknik ini bisa kamu pakai kapan saja—sebelum presentasi, interview, atau momen mendebarkan lainnya.
          </p>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="lesson-cta-wrapper">
        <button
          type="button"
          className="btn-lesson-finish"
          onClick={onNext}
          data-node-id="281:898"
        >
          Selesaikan Pelajaran
        </button>
      </div>
    </div>
  );
}

// ─── Main LessonScreen orchestrator ──────────────────────────────────────────
export default function LessonScreen({ lessonData, onBack, onFinish }) {
  const isModul7 = lessonData?.moduleData?.id === 7 || lessonData?.lessonNum === 6;

  if (isModul7) {
    return (
      <LessonModul7Screen
        onBack={onBack}
        onFinish={onFinish}
      />
    );
  }

  // step: "affirmation" | 1 | 2 | 3 | 4 | 5 | "completed"
  const [step, setStep] = useState("affirmation");
  const [showExitModal, setShowExitModal] = useState(false);

  const handleTopBarBack = () => {
    setShowExitModal(true);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    onBack?.();
  };

  const goNext = () => {
    setStep((prev) => {
      if (prev === "affirmation") return 1;
      if (prev === 1) return 2;
      if (prev === 2) return 3;
      if (prev === 3) return 4;
      if (prev === 4) return 5;
      if (prev === 5) return "completed";
      return "completed";
    });
  };

  const goPrev = () => {
    setStep((prev) => {
      if (prev === 1 || prev === "affirmation") {
        return "affirmation";
      }
      if (prev === "completed") return 5;
      return prev - 1;
    });
  };

  return (
    <div className="lesson-screen">
      {step === "affirmation" && (
        <LessonAffirmation
          quote={lessonData?.affirmationQuote}
          onComplete={goNext}
        />
      )}
      {step === 1 && <LessonPage1 onNext={goNext} onTopBarBack={handleTopBarBack} />}
      {step === 2 && <LessonPage2 onNext={goNext} onBack={goPrev} onTopBarBack={handleTopBarBack} />}
      {step === 3 && <LessonPage3 onNext={goNext} onBack={goPrev} onTopBarBack={handleTopBarBack} />}
      {step === 4 && <LessonPage4 onNext={goNext} onTopBarBack={handleTopBarBack} />}
      {step === 5 && <LessonPage5 onNext={goNext} onTopBarBack={handleTopBarBack} />}
      {step === "completed" && <CompletedLesson onFinish={onFinish} />}

      {/* Exit Confirmation Modal */}
      <ExitLessonModal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        onConfirm={handleConfirmExit}
      />
    </div>
  );
}
