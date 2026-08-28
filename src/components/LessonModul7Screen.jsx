import React, { useState, useRef } from "react";
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
const IconArrowLeft = ({ color = "#243238" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── TopBar with progress bar ─────────────────────────────────────────────────
function LessonTopBar({ currentStep, totalSteps, onBack, isDark = false }) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className={`modul7-lesson-topbar ${isDark ? "modul7-topbar--dark" : ""}`} data-node-id="329:1660">
      <button
        type="button"
        className={`modul7-lesson-back-btn ${isDark ? "modul7-back-btn--dark" : ""}`}
        onClick={onBack}
        aria-label="Kembali"
        data-node-id="339:2630"
      >
        <IconArrowLeft color={isDark ? "#FFFFFF" : "#243238"} />
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
      <LessonTopBar currentStep={1} totalSteps={7} onBack={onBack} />

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

          {/* Card 2: Panik */}
          <div className="modul7-feeling-card" data-node-id="329:1689">
            <div className="modul7-card-img-container" data-node-id="329:1690">
              <img
                src={imgPanik}
                alt="Panik karena mikir harus jawab sempurna sekarang juga"
                className="modul7-card-img"
              />
            </div>
            <p className="modul7-card-text" data-node-id="329:1691">
              Panik karena mikir harus jawab sempurna sekarang juga?
            </p>
          </div>

          {/* Card 3: Gak kompeten */}
          <div className="modul7-feeling-card" data-node-id="329:1694">
            <div className="modul7-card-img-container" data-node-id="329:1695">
              <img
                src={imgGakKompeten}
                alt="Takut kelihatan nggak kompeten di depan audiens"
                className="modul7-card-img"
              />
            </div>
            <p className="modul7-card-text" data-node-id="329:1696">
              Takut kelihatan nggak kompeten di depan audiens?
            </p>
          </div>
        </div>
      </div>

      <div className="modul7-lesson-cta-wrapper" data-node-id="329:1671">
        <button
          type="button"
          className="btn-modul7-next"
          onClick={onNext}
          data-node-id="329:1672"
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
      <LessonTopBar currentStep={2} totalSteps={7} onBack={onBack} />

      {/* Center Quotes Area */}
      <div className="modul7-page2-content" data-node-id="329:1719">
        <p className="modul7-page2-quote text-quotes" data-node-id="329:1720">
          ”Pertanyaan menantang bukan serangan. Itu tanda audiens peduli dan pengin denger sudut pandangmu.”
        </p>
      </div>

      {/* Bottom Mascot Illustration */}
      <div className="modul7-page2-mascot-wrapper" data-node-id="329:1721">
        <img
          src={imgMascottQuotes}
          alt="Mascot Quotes"
          className="modul7-page2-mascot-img"
        />
      </div>

      {/* Dual Bottom Buttons */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2220">
        <button
          type="button"
          className="btn-modul7-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2221"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2226"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Page 3: Cognitive Restructuring (Figma node 329:1733) ───────────────────
function LessonPage3({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page" data-node-id="329:1733" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={3} totalSteps={7} onBack={onBack} />

      <div className="modul7-lesson-content modul7-page3-content" data-node-id="329:1742">
        {/* Title Header */}
        <div className="modul7-page3-header" data-node-id="329:1743">
          <p className="modul7-page3-subtitle" data-node-id="329:1744">
            Uji Fakta (Cognitive Restructuring)
          </p>
          <h2 className="modul7-page3-title" data-node-id="329:1745">
            Pikiranmu suka melebih-lebihkan
          </h2>
        </div>

        {/* Thought & Fact Flow Cards */}
        <div className="modul7-page3-flow" data-node-id="329:1747">
          {/* Card 1: Dark thought card */}
          <div className="modul7-thought-card" data-node-id="329:1748">
            <div className="modul7-brain-img-wrapper" data-node-id="329:1749">
              <img src={imgBrain} alt="Brain" className="modul7-brain-img" />
            </div>
            <div className="modul7-thought-text-wrapper" data-node-id="329:1751">
              <p className="modul7-thought-label" data-node-id="329:1752">
                Pikiran otomatis:
              </p>
              <p className="modul7-thought-content" data-node-id="329:1753">
                ”Gue harus tahu semua jawaban. Kalau nggak bisa, gue gagal total.”
              </p>
            </div>
          </div>

          {/* Dotted Arrow Down */}
          <div className="modul7-dotted-arrow-wrapper" data-node-id="333:1783">
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V40" stroke="#243238" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round"/>
              <path d="M6 34L12 42L18 34" stroke="#243238" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 2: White fact card */}
          <div className="modul7-fact-card" data-node-id="329:1754">
            <p className="modul7-fact-label" data-node-id="329:1755">
              Faktanya:
            </p>
            <p className="modul7-fact-content" data-node-id="329:1756">
              Audiens menghargai kejujuran. Nggak tahu bukan berarti nggak kompeten — itu kesempatan buat eksplorasi bareng.
            </p>
          </div>
        </div>
      </div>

      {/* Dual Bottom Buttons */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2229">
        <button
          type="button"
          className="btn-modul7-round-back"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2230"
        >
          <IconArrowLeft />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2235"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

// ─── Page 4: Cognitive Defusion (Figma node 333:1784) ─────────────────────────
function LessonPage4({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page" data-node-id="333:1784" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={4} totalSteps={7} onBack={onBack} />

      <div className="modul7-lesson-content modul7-page4-content" data-node-id="333:1786">
        {/* Header */}
        <div className="modul7-page4-header" data-node-id="333:1787">
          <p className="modul7-page4-subtitle" data-node-id="333:1788">
            Beri Jarak (Cognitive Defusion)
          </p>
          <h2 className="modul7-page4-title" data-node-id="333:1789">
            Kamu bukan pikiranmu
          </h2>
        </div>

        {/* 3 Step Flow */}
        <div className="modul7-page4-flow" data-node-id="333:1791">
          {/* 1. Dark Thought Card */}
          <div className="modul7-defusion-thought-card" data-node-id="333:1792">
            <div className="modul7-mascot-senyum-wrapper" data-node-id="333:1793">
              <img
                src={imgMascottSenyum}
                alt="Mascot Senyum Jahat"
                className="modul7-mascot-senyum-img"
              />
            </div>
            <p className="modul7-defusion-thought-text" data-node-id="333:1795">
              ”Pertanyaan ini jebakan. Dia pengin bikin gue malu.”
            </p>
          </div>

          {/* Dotted Arrow 1 */}
          <div className="modul7-short-dotted-arrow">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V20" stroke="#243238" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round"/>
              <path d="M7 16L12 22L17 16" stroke="#243238" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* 2. Center Pill: Ambil napas */}
          <div className="modul7-breath-pill" data-node-id="333:1797">
            <span>Ambil napas</span>
            <span className="modul7-breath-emoji">🧘</span>
          </div>

          {/* Dotted Arrow 2 */}
          <div className="modul7-short-dotted-arrow">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V20" stroke="#243238" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round"/>
              <path d="M7 16L12 22L17 16" stroke="#243238" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* 3. White Reframed Thought Card */}
          <div className="modul7-reframed-card" data-node-id="333:1799">
            <p className="modul7-reframed-text" data-node-id="333:1800">
              ”Aku lagi ngerasa terancam, padahal ini cuma pertanyaan biasa.”
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
      <LessonTopBar currentStep={5} totalSteps={7} onBack={onBack} />

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
      <LessonTopBar currentStep={6} totalSteps={7} onBack={onBack} />

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
                "Poin kamu tentang [X] ada benernya..."
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="modul7-formula-card" data-node-id="334:1870">
            <div className="modul7-formula-num-badge" data-node-id="334:1878">
              3
            </div>
            <div className="modul7-formula-text-wrap" data-node-id="334:1889">
              <p className="modul7-formula-card-title" data-node-id="334:1890">
                Sikap / Batas 🧭
              </p>
              <p className="modul7-formula-card-desc" data-node-id="334:1891">
                "...tapi dari data yang kita punya, pendekatan [Y] tetap yang paling efektif."
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

// ─── Page 7: Skenario Latihan (Figma node 338:1896) ───────────────────────────
const SCENARIO_STEPS = [
  { id: 1, num: 1, text: "Mendapatkan tema secara acak" },
  { id: 2, num: 2, text: "Siapkan 3 poin untuk argumenmu" },
  { id: 3, num: 3, text: "Mini-presentation" },
  { id: 4, num: 4, text: "Transisi Q&A" },
  { id: 5, num: 5, text: "Pertanyaan menantang" },
  { id: 6, num: 7, text: "Feedback" },
];

function LessonPage7({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page modul7-lesson-page-dark" data-node-id="338:1896" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={7} totalSteps={7} onBack={onBack} isDark={true} />

      <div className="modul7-lesson-content modul7-page7-content" data-node-id="338:1905">
        {/* Header */}
        <div className="modul7-page7-header" data-node-id="338:1996">
          <p className="modul7-page7-subtitle" data-node-id="338:1997">
            Skenario Latihan
          </p>
          <h2 className="modul7-page7-title" data-node-id="338:1998">
            Hadapi Pertanyaan Menantang
          </h2>
        </div>

        {/* 6 Flow Steps Cards */}
        <div className="modul7-page7-cards-wrapper" data-node-id="338:1999">
          {SCENARIO_STEPS.map((item) => (
            <div key={item.id} className="modul7-scenario-card" data-node-id={`scenario-card-${item.id}`}>
              <div className="modul7-scenario-badge" data-node-id={`scenario-badge-${item.id}`}>
                {item.num}
              </div>
              <p className="modul7-scenario-text" data-node-id={`scenario-text-${item.id}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Bottom Buttons */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2203">
        <button
          type="button"
          className="btn-modul7-round-back btn-modul7-round-back--dark"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2204"
        >
          <IconArrowLeft color="#FFFFFF" />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2209"
        >
          Aku Siap!
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
      if (prev === 6) return 7;
      if (prev === 7) return "completed";
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
      if (prev === 7) return 6;
      if (prev === "completed") return 7;
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
      {step === 7 && <LessonPage7 onNext={goNext} onBack={goPrev} />}
      {step === "completed" && <CompletedLesson onFinish={onFinish} />}
    </div>
  );
}
