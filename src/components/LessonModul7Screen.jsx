import React, { useState } from "react";
import "./LessonModul7Screen.css";

// ─── Assets for Modul 7 Lesson 6 ─────────────────────────────────────────────
import imgBlankTotal from "../assets/pages_assets/lessons/lesson-6-modul7/Image-BlankTotal.png";
import imgPanik from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Panik-Page1.png";
import imgGakKompeten from "../assets/pages_assets/lessons/lesson-6-modul7/Image-GakKompeten-Page1.png";
import imgBrain from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Brain.png";
import imgMascottQuotes from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Mascott-Quotes.png";
import imgMascottSenyum from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Mascott-SenyumJahat.png";
import videoHappySpeaker from "../assets/pages_assets/lessons/lesson-6-modul7/Video-Happy-Speaker.webm";
import videoGainXP from "../assets/pages_assets/gain_xp/Video-Gain-XP.webm";

// ─── Back Arrow Icon ─────────────────────────────────────────────────────────
const IconArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#243238" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── TopBar with progress bar ─────────────────────────────────────────────────
function LessonTopBar({ currentStep, totalSteps, onBack }) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="modul7-lesson-topbar" data-node-id="329:1660">
      <button
        type="button"
        className="modul7-lesson-back-btn"
        onClick={onBack}
        aria-label="Kembali"
        data-node-id="339:2630"
      >
        <IconArrowLeft />
      </button>
      <div className="modul7-lesson-progress-bar" data-node-id="329:1665">
        <div className="modul7-lesson-progress-track" data-node-id="329:1666">
          <div
            className="modul7-lesson-progress-fill"
            style={{ width: `${progress}%` }}
            data-node-id="329:1667"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Page 1: Pernah nggak ngerasa... (Figma node 329:1659) ───────────────────
function LessonPage1({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page" data-node-id="329:1659" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={1} totalSteps={6} onBack={onBack} />

      <div className="modul7-lesson-content" data-node-id="329:1669">
        <h2 className="modul7-lesson-heading" data-node-id="329:1670">
          Pernah nggak ngerasa...
        </h2>

        <div className="modul7-cards-wrapper" data-node-id="329:1683">
          {/* Card 1: Blank total */}
          <div className="modul7-feeling-card" data-node-id="329:1684">
            <div className="modul7-card-img-container" data-node-id="329:1685">
              <img
                src={imgBlankTotal}
                alt="Blank total saat ditanya hal yang nggak kamu siapkan"
                className="modul7-card-img"
              />
            </div>
            <p className="modul7-card-text" data-node-id="329:1686">
              Blank total saat ditanya hal yang nggak kamu siapkan?
            </p>
          </div>

          {/* Card 2: Jawaban belibet */}
          <div className="modul7-feeling-card" data-node-id="329:1687">
            <div className="modul7-card-img-container" data-node-id="329:1688">
              <img
                src={imgPanik}
                alt="Jawaban jadi belibet karena keburu panik"
                className="modul7-card-img"
              />
            </div>
            <p className="modul7-card-text" data-node-id="329:1689">
              Jawaban jadi belibet karena keburu panik?
            </p>
          </div>

          {/* Card 3: Takut nggak kompeten */}
          <div className="modul7-feeling-card" data-node-id="329:1690">
            <div className="modul7-card-img-container" data-node-id="329:1691">
              <img
                src={imgGakKompeten}
                alt="Takut kelihatan nggak kompeten di depan orang lain"
                className="modul7-card-img"
              />
            </div>
            <p className="modul7-card-text" data-node-id="329:1692">
              Takut kelihatan nggak kompeten di depan orang lain?
            </p>
          </div>
        </div>
      </div>

      {/* Fixed bottom CTA Button */}
      <div className="modul7-lesson-cta-wrapper">
        <button
          type="button"
          className="btn-modul7-next"
          onClick={onNext}
          data-node-id="329:1680"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Page 2: Quotes / Mindset (Figma node 329:1710) ──────────────────────────
function LessonPage2({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page modul7-lesson-page-2" data-node-id="329:1710" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={2} totalSteps={6} onBack={onBack} />

      {/* Center Quotes Area */}
      <div className="modul7-page2-content" data-node-id="329:1719">
        <p className="modul7-page2-quote text-quotes" data-node-id="329:1720">
          ”Menghadapi pertanyaan sulit bukan berarti kita harus jadi kamus berjalan. Tantangan sebenarnya adalah bagaimana kita tetap tenang saat otak dipaksa berpikir cepat di hadapan orang lain.”
        </p>
      </div>

      {/* Bottom Mascot Illustration */}
      <div className="modul7-page2-mascot-wrapper" data-node-id="331:1763">
        <img
          src={imgMascottQuotes}
          alt="Mascot Quotes"
          className="modul7-page2-mascot-img"
        />
      </div>

      {/* Dual Bottom Buttons (Back pill + Lanjut pill) */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2221">
        <button
          type="button"
          className="btn-modul7-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2222"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2227"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Dotted Arrow Connector ──────────────────────────────────────────────────
const DottedArrow = () => (
  <div className="modul7-arrow-divider" aria-hidden="true" data-node-id="332:1776">
    <svg width="12" height="34" viewBox="0 0 12 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 0V26"
        stroke="#243238"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />
      <path
        d="M2.5 23L6 28L9.5 23"
        stroke="#243238"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// ─── Page 3: Cognitive Restructuring (Figma node 329:1733) ───────────────────
function LessonPage3({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page" data-node-id="329:1733" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={3} totalSteps={6} onBack={onBack} />

      <div className="modul7-lesson-content modul7-page3-content" data-node-id="329:1742">
        {/* Title Header */}
        <div className="modul7-page3-header" data-node-id="334:1833">
          <p className="modul7-page3-subtitle" data-node-id="334:1831">
            Cognitive Restructuring
          </p>
          <h2 className="modul7-page3-title" data-node-id="329:1746">
            Pikiran itu belum<br />tentu fakta
          </h2>
        </div>

        {/* Cognitive Comparison Cards */}
        <div className="modul7-page3-cards-container" data-node-id="332:1780">
          {/* Dark Thought Card */}
          <div className="modul7-thought-card-dark" data-node-id="329:1748">
            <div className="modul7-brain-img-wrap" data-node-id="332:1774">
              <img
                src={imgBrain}
                alt="Brain"
                className="modul7-brain-img"
              />
            </div>
            <p className="modul7-thought-text-dark" data-node-id="329:1754">
              “Mereka pasti menilaiku buruk karena aku nggak bisa langsung menjawab pertanyaan ini.”
            </p>
          </div>

          {/* Dotted Arrow Connector */}
          <DottedArrow />

          {/* Fact Card */}
          <div className="modul7-fact-card-white" data-node-id="329:1756">
            <h3 className="modul7-fact-card-label" data-node-id="332:1782">
              Fakta Sebenarnya
            </h3>
            <p className="modul7-fact-card-text" data-node-id="329:1757">
              “Orang lain paham ini pertanyaan sulit. Yang paling penting bukan kecepatan menjawab, tapi kemampuanku untuk tetap tenang dan fokus memprosesnya.”
            </p>
          </div>
        </div>
      </div>

      {/* Dual Bottom Buttons */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2185">
        <button
          type="button"
          className="btn-modul7-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2186"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2191"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Short Dotted Arrow Connector ───────────────────────────────────────────
const DottedArrowShort = () => (
  <div className="modul7-arrow-divider-short" aria-hidden="true">
    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 0V15"
        stroke="#243238"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />
      <path
        d="M2.5 12L6 17L9.5 12"
        stroke="#243238"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// ─── Page 4: Cognitive Defusion (Figma node 333:1784) ────────────────────────
function LessonPage4({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page" data-node-id="333:1784" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={4} totalSteps={6} onBack={onBack} />

      <div className="modul7-lesson-content modul7-page4-content" data-node-id="333:1793">
        {/* Title Header */}
        <div className="modul7-page4-header" data-node-id="334:1834">
          <p className="modul7-page4-subtitle" data-node-id="334:1835">
            Cognitive Defusion
          </p>
          <h2 className="modul7-page4-title" data-node-id="334:1836">
            Kamu nggak harus<br />percaya tiap pikiran
          </h2>
        </div>

        {/* Defusion Flow Container */}
        <div className="modul7-page4-cards-container" data-node-id="333:1795">
          {/* Dark Catastrophizing Thought Card */}
          <div className="modul7-thought-card-dark" data-node-id="333:1796">
            <div className="modul7-brain-img-wrap" data-node-id="333:1797">
              <img
                src={imgBrain}
                alt="Brain"
                className="modul7-brain-img"
              />
            </div>
            <p className="modul7-thought-text-dark" data-node-id="333:1798">
              “Gila, aku diam kelamaan pas ditanya. Habis sudah reputasiku, presentasiku pasti dianggap gagal total.”
            </p>
          </div>

          {/* Arrow 1 */}
          <DottedArrowShort />

          {/* Center Action Tag */}
          <p className="modul7-breath-tag" data-node-id="334:1811">
            Ambil napas 🧘
          </p>

          {/* Arrow 2 */}
          <DottedArrowShort />

          {/* White Reframed Card */}
          <div className="modul7-fact-card-white" data-node-id="333:1802">
            <h3 className="modul7-fact-card-label" data-node-id="333:1803">
              Ubah menjadi...
            </h3>
            <p className="modul7-fact-card-text" data-node-id="333:1804">
              ”Aku sedang mengamati pikiranku yang lagi muterin skenario 'reputasiku hancur' hanya karena aku butuh waktu 5 detik untuk mikir.”
            </p>
          </div>
        </div>
      </div>

      {/* Dual Bottom Buttons */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2230">
        <button
          type="button"
          className="btn-modul7-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2231"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2236"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Page 5: Conclusion / Empowering Mindset (Figma node 334:1816) ───────────
function LessonPage5({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page modul7-lesson-page-2" data-node-id="334:1816" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={5} totalSteps={6} onBack={onBack} />

      {/* Center Quotes Area */}
      <div className="modul7-page2-content" data-node-id="334:1825">
        <p className="modul7-page2-quote text-quotes" data-node-id="334:1826">
          ”Saat pertanyaan sulit datang, pikiranmu akan mencoba membunyikan alarm palsu. Uji faktanya atau beri jarak pada paniknya. Ingat: kamu adalah pengendali panggungmu, bukan tawanan dari pikiranmu sendiri.”
        </p>
      </div>

      {/* Bottom Mascot Illustration */}
      <div className="modul7-page2-mascot-wrapper" data-node-id="334:1827">
        <img
          src={imgMascottQuotes}
          alt="Mascot Quotes"
          className="modul7-page2-mascot-img"
        />
      </div>

      {/* Dual Bottom Buttons */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2239">
        <button
          type="button"
          className="btn-modul7-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2240"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2245"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Page 6: Teknik Merespons Kritik (Figma node 334:1838) ───────────────────
function LessonPage6({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page" data-node-id="334:1838" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={6} totalSteps={6} onBack={onBack} />

      <div className="modul7-lesson-content modul7-page6-content" data-node-id="334:1847">
        {/* Title Header */}
        <div className="modul7-page6-header" data-node-id="334:1848">
          <p className="modul7-page6-subtitle" data-node-id="334:1849">
            Teknik Merespons Kritik
          </p>
          <h2 className="modul7-page6-title" data-node-id="334:1850">
            Formula 3 langkah:<br />
            Empati → Titik Temu → Batas
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="modul7-page6-cards-wrapper" data-node-id="334:1863">
          {/* Card 1 */}
          <div className="modul7-formula-card" data-node-id="334:1864">
            <div className="modul7-formula-num-badge" data-node-id="334:1874">
              1
            </div>
            <div className="modul7-formula-text-wrap" data-node-id="334:1883">
              <p className="modul7-formula-card-title" data-node-id="334:1866">
                Empati 🤝
              </p>
              <p className="modul7-formula-card-desc" data-node-id="334:1882">
                "Aku ngerti kenapa itu jadi concern buat kamu."
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="modul7-formula-card" data-node-id="334:1867">
            <div className="modul7-formula-num-badge" data-node-id="334:1876">
              2
            </div>
            <div className="modul7-formula-text-wrap" data-node-id="334:1885">
              <p className="modul7-formula-card-title" data-node-id="334:1886">
                Cari Titik Temu 🔎
              </p>
              <p className="modul7-formula-card-desc" data-node-id="334:1887">
                "Ada bagian yang emang bisa aku perjelas lebih lanjut."
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="modul7-formula-card" data-node-id="334:1870">
            <div className="modul7-formula-num-badge" data-node-id="334:1879">
              3
            </div>
            <div className="modul7-formula-text-wrap" data-node-id="334:1889">
              <p className="modul7-formula-card-title" data-node-id="334:1890">
                Sikap/Batas 🧭
              </p>
              <p className="modul7-formula-card-desc" data-node-id="334:1891">
                "Tapi dari data yang aku punya, kesimpulannya tetap seperti ini."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Bottom Buttons */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2113">
        <button
          type="button"
          className="btn-modul7-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2248"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2119"
        >
          Ayo Latihan
        </button>
      </div>
    </div>
  );
}

// ─── Completed Lesson Gain XP Screen ─────────────────────────────────────────
function CompletedLesson({ onFinish }) {
  const [displayedXP, setDisplayedXP] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setIsCounting(true);
    let current = 0;
    const target = 100;
    const duration = 2000;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayedXP(target);
        clearInterval(timer);
        setIsCounting(false);
        setTimeout(() => {
          setShowButton(true);
        }, 1000);
      } else {
        setDisplayedXP(Math.floor(current));
      }
    }, stepTime);
  };

  return (
    <div className="lesson-completed-screen" data-node-id="gain-xp">
      <div className="lesson-completed-content">
        <div className="lesson-gain-xp-video-wrapper">
          <video
            ref={videoRef}
            src={videoGainXP}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="lesson-gain-xp-video"
          />
        </div>

        {displayedXP > 0 && (
          <div className="lesson-completed-xp-badge-wrapper lesson-badge-appear">
            <div className="lesson-completed-xp-badge">
              <div className={`lesson-sparkle-stars ${isCounting ? "active-sparkle" : "sparkle-stopped"}`}>
                <span className="sparkle-star star-1">✦</span>
                <span className="sparkle-star star-2">✨</span>
                <span className="sparkle-star star-3">✧</span>
                <span className="sparkle-star star-4">✦</span>
                <span className="sparkle-star star-5">✨</span>
                <span className="sparkle-star star-6">✧</span>
              </div>
              <p className="lesson-completed-xp-amount">
                +{displayedXP} XP
              </p>
            </div>
          </div>
        )}
      </div>

      {showButton && (
        <div className="lesson-cta-wrapper lesson-cta-appear">
          <button
            type="button"
            className="btn-lesson-finish"
            onClick={onFinish}
          >
            Tutup
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main Lesson 6 Modul 7 Screen ────────────────────────────────────────────
export default function LessonModul7Screen({ onBack, onFinish }) {
  const [step, setStep] = useState(1);

  const goNext = () => {
    setStep((prev) => {
      if (prev === 1) return 2;
      if (prev === 2) return 3;
      if (prev === 3) return 4;
      if (prev === 4) return 5;
      if (prev === 5) return 6;
      if (prev === 6) return "completed";
      return "completed";
    });
  };

  const goPrev = () => {
    setStep((prev) => {
      if (prev === 1) {
        onBack?.();
        return 1;
      }
      if (prev === 2) return 1;
      if (prev === 3) return 2;
      if (prev === 4) return 3;
      if (prev === 5) return 4;
      if (prev === 6) return 5;
      if (prev === "completed") return 6;
      return prev - 1;
    });
  };

  return (
    <div className="modul7-lesson-screen">
      {step === 1 && <LessonPage1 onNext={goNext} onBack={goPrev} />}
      {step === 2 && <LessonPage2 onNext={goNext} onBack={goPrev} />}
      {step === 3 && <LessonPage3 onNext={goNext} onBack={goPrev} />}
      {step === 4 && <LessonPage4 onNext={goNext} onBack={goPrev} />}
      {step === 5 && <LessonPage5 onNext={goNext} onBack={goPrev} />}
      {step === 6 && <LessonPage6 onNext={goNext} onBack={goPrev} />}
      {step === "completed" && <CompletedLesson onFinish={onFinish} />}
    </div>
  );
}
