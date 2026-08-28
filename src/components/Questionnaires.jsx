import React, { useState } from "react";
import "./Questionnaires.css";

// ─── Asset Imports ───────────────────────────────────────────────────────────
import q1Illustration from "../assets/pages_assets/questionnaires/q1_illustration.png";
import q2Illustration from "../assets/pages_assets/questionnaires/q2_illustration.png";
import q3Illustration from "../assets/pages_assets/questionnaires/q3_illustration.png";
import q4Illustration from "../assets/pages_assets/questionnaires/q4_illustration.png";
import q5Illustration from "../assets/pages_assets/questionnaires/q5_illustration.png";
import q6Illustration from "../assets/pages_assets/questionnaires/q6_illustration.png";
import arrowLeftIcon from "../assets/pages_assets/questionnaires/arrow_left.svg";

// ─── Question Dataset (6 Questionnaires) ───────────────────────────────────────
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

  // Dynamic theme colors: Green for calm (1-5), Orange for nervous/panic (6-10)
  const isHighNervous = current > 5;
  const activeColor = isHighNervous ? "var(--color-secondary, #E8753D)" : "var(--color-primary, #24A981)";
  const activeBg = isHighNervous ? "rgba(232, 117, 61, 0.12)" : "rgba(36, 169, 129, 0.12)";

  // Generate tick stops
  const ticks = [];
  for (let i = min; i <= max; i++) {
    ticks.push(i);
  }

  return (
    <div className="modern-slider-container" data-node-id="207:3170">
      {/* Dynamic current value display badge */}
      <div className="slider-value-display">
        <div
          className="slider-value-badge"
          style={{
            borderColor: activeColor,
            backgroundColor: activeBg,
            color: activeColor,
          }}
        >
          <span>Skala:</span>
          <strong>{current} / {max}</strong>
        </div>
      </div>

      {/* Interactive track with dual-tone background and custom handle */}
      <div className="slider-interactive-track">
        <div className="slider-track-bg-left" />
        <div className="slider-track-bg-right" />

        {/* Dynamic active fill */}
        <div
          className="slider-track-active-fill"
          style={{
            width: `${percent}%`,
            backgroundColor: activeColor,
          }}
        />

        {/* Ticks dots */}
        <div className="slider-ticks-row">
          {ticks.map((t) => {
            const tPercent = ((t - min) / (max - min)) * 100;
            const isPassed = t <= current;
            return (
              <span
                key={t}
                className="slider-tick-dot"
                style={{
                  left: `${tPercent}%`,
                  backgroundColor: isPassed ? "#FFFFFF" : "rgba(36, 50, 56, 0.2)",
                }}
              />
            );
          })}
        </div>

        {/* Custom Draggable Thumb */}
        <div
          className="slider-custom-thumb"
          style={{
            left: `${percent}%`,
            borderColor: activeColor,
          }}
        >
          <div
            className="slider-thumb-inner"
            style={{ backgroundColor: activeColor }}
          />
        </div>

        {/* Invisible native range input overlay for 100% touch & drag accuracy */}
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

      {/* Bottom min / max descriptive labels */}
      <div className="slider-bottom-labels">
        <span className="slider-bottom-min">{question.minLabel}</span>
        <span className="slider-bottom-max">{question.maxLabel}</span>
      </div>
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
    if (isFirstStep) {
      if (onBackToOnboarding) onBackToOnboarding();
    } else {
      setCurrentStepIndex((i) => i - 1);
    }
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
            className={`btn-nav-back ${isFirstStep ? "is-first-step" : ""}`}
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
        {/* Question Title + Illustration */}
        <div className="question-header-content" data-node-id="207:3166">
          <h1 className="question-title" data-node-id="207:3167">
            {currentQuestion.title}
          </h1>
          {currentQuestion.illustration && (
            <div
              className="question-illustration-container"
              data-node-id="207:3168"
            >
              <img
                src={currentQuestion.illustration}
                alt=""
                className="question-illustration"
              />
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="question-input-area">
          {currentQuestion.type === "tags_multi" && (
            <TagsMultiInput
              question={currentQuestion}
              value={answers[currentQuestion.id]}
              onChange={(v) => setAnswer(currentQuestion.id, v)}
            />
          )}
          {currentQuestion.type === "radio" && (
            <RadioInput
              question={currentQuestion}
              value={answers[currentQuestion.id]}
              onChange={(v) => setAnswer(currentQuestion.id, v)}
            />
          )}
          {(currentQuestion.type === "slider" ||
            currentQuestion.type === "scale" ||
            currentQuestion.type === "centered_slider" ||
            currentQuestion.type === "scale_boxes") && (
            <ModernSliderInput
              question={currentQuestion}
              value={answers[currentQuestion.id]}
              onChange={(v) => setAnswer(currentQuestion.id, v)}
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
      </main>
    </div>
  );
}
