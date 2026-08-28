import React, { useState, useEffect, useRef } from "react";
import "./LessonModul7Screen.css";

// ─── Assets for Modul 7 Lesson 6 ─────────────────────────────────────────────
import imgBlankTotal from "../assets/pages_assets/lessons/lesson-6-modul7/Image-BlankTotal.png";
import imgPanik from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Panik-Page1.png";
import imgGakKompeten from "../assets/pages_assets/lessons/lesson-6-modul7/Image-GakKompeten-Page1.png";
import imgBrain from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Brain.png";
import imgMascottQuotes from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Mascott-Quotes.png";
import imgMascottSenyum from "../assets/pages_assets/lessons/lesson-6-modul7/Image-Mascott-SenyumJahat.png";
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
      <LessonTopBar currentStep={1} totalSteps={12} onBack={onBack} />

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
      <LessonTopBar currentStep={2} totalSteps={12} onBack={onBack} />

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
      <LessonTopBar currentStep={3} totalSteps={12} onBack={onBack} />

      <div className="modul7-lesson-content modul7-page3-content" data-node-id="329:1742">
        {/* Title Header */}
        <div className="modul7-page3-header" data-node-id="329:1743">
          <p className="modul7-page3-subtitle" data-node-id="329:1744">
            Cognitive Restructuring
          </p>
          <h2 className="modul7-page3-title" data-node-id="329:1745">
            Pikiran itu belum tentu fakta
          </h2>
        </div>

        {/* Thought & Fact Flow Cards */}
        <div className="modul7-page3-cards-container" data-node-id="329:1747">
          {/* Card 1: Dark thought card */}
          <div className="modul7-thought-card-dark" data-node-id="329:1748">
            <div className="modul7-brain-img-wrap" data-node-id="329:1749">
              <img src={imgBrain} alt="Brain" className="modul7-brain-img" />
            </div>
            <p className="modul7-thought-text-dark" data-node-id="329:1753">
              “Mereka pasti menilaiku buruk karena aku nggak bisa langsung menjawab pertanyaan ini.”
            </p>
          </div>

          {/* Dotted Arrow Down */}
          <div className="modul7-arrow-divider" data-node-id="333:1783">
            <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V26" stroke="#243238" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round"/>
              <path d="M7 21L12 28L17 21" stroke="#243238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 2: White fact card */}
          <div className="modul7-fact-card-white" data-node-id="329:1754">
            <p className="modul7-fact-card-label" data-node-id="329:1755">
              Fakta Sebenarnya
            </p>
            <p className="modul7-fact-card-text" data-node-id="329:1756">
              “Orang lain paham ini pertanyaan sulit. Yang paling penting bukan kecepatan menjawab, tapi kemampuanku untuk tetap tenang dan fokus memprosesnya.”
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
      <LessonTopBar currentStep={4} totalSteps={12} onBack={onBack} />

      <div className="modul7-lesson-content modul7-page4-content" data-node-id="333:1786">
        {/* Header */}
        <div className="modul7-page4-header" data-node-id="333:1787">
          <p className="modul7-page4-subtitle" data-node-id="333:1788">
            Cognitive Defusion
          </p>
          <h2 className="modul7-page4-title" data-node-id="333:1789">
            Kamu nggak harus percaya tiap pikiran
          </h2>
        </div>

        {/* 3 Step Flow */}
        <div className="modul7-page4-cards-container" data-node-id="333:1791">
          {/* 1. Dark Thought Card */}
          <div className="modul7-thought-card-dark" data-node-id="333:1792">
            <div className="modul7-brain-img-wrap" data-node-id="333:1793">
              <img
                src={imgBrain}
                alt="Brain"
                className="modul7-brain-img"
              />
            </div>
            <p className="modul7-thought-text-dark" data-node-id="333:1795">
              “Gila, aku diam kelamaan pas ditanya. Habis sudah reputasiku, presentasiku pasti dianggap gagal total.”
            </p>
          </div>

          {/* Dotted Arrow 1 */}
          <div className="modul7-arrow-divider-short">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V16" stroke="#243238" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round"/>
              <path d="M7 12L12 18L17 12" stroke="#243238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* 2. Center Text: Ambil napas */}
          <p className="modul7-breath-tag" data-node-id="333:1797">
            Ambil napas 🧘
          </p>

          {/* Dotted Arrow 2 */}
          <div className="modul7-arrow-divider-short">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V16" stroke="#243238" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round"/>
              <path d="M7 12L12 18L17 12" stroke="#243238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* 3. White Reframed Thought Card */}
          <div className="modul7-reframed-card-white" data-node-id="333:1799">
            <p className="modul7-reframed-card-label">
              Ubah menjadi...
            </p>
            <p className="modul7-reframed-card-text" data-node-id="333:1800">
              ”Aku sedang mengamati pikiranku yang lagi muterin skenario ’reputasiku hancur’ hanya karena aku butuh waktu 5 detik untuk mikir.”
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
      <LessonTopBar currentStep={5} totalSteps={12} onBack={onBack} />

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
      <LessonTopBar currentStep={6} totalSteps={12} onBack={onBack} />

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
      <LessonTopBar currentStep={7} totalSteps={12} onBack={onBack} isDark={true} />

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

// ─── Page 8: Tema Latihan (Figma node 338:1946) ───────────────────────────────
function LessonPage8({ onNext, onBack }) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown <= 0) {
      onNext();
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown, onNext]);

  return (
    <div className="modul7-lesson-page modul7-lesson-page-dark" data-node-id="338:1946" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={8} totalSteps={12} onBack={onBack} isDark={true} />

      <div className="modul7-lesson-content modul7-page8-content" data-node-id="338:1947">
        {/* Main Theme Topic Wrapper */}
        <div className="modul7-page8-theme-wrapper" data-node-id="338:1948">
          <p className="modul7-page8-theme-subtitle" data-node-id="338:1949">
            Tema nya adalah
          </p>
          <h2 className="modul7-page8-theme-title" data-node-id="338:1950">
            “Apakah belajar sambil mendengarkan musik membuatmu lebih fokus?”
          </h2>
        </div>

        {/* Auto start countdown */}
        <p className="modul7-page8-countdown-text" data-node-id="338:1951">
          Mulai otomatis dalam {countdown}
        </p>
      </div>

      {/* Dual Bottom Buttons */}
      <div className="modul7-page2-cta-wrapper" data-node-id="338:2212">
        <button
          type="button"
          className="btn-modul7-round-back btn-modul7-round-back--dark"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          data-node-id="338:2213"
        >
          <IconArrowLeft color="#FFFFFF" />
        </button>
        <button
          type="button"
          className="btn-modul7-next btn-modul7-next--flex"
          onClick={onNext}
          data-node-id="338:2218"
        >
          Siapkan Pendapatku!
        </button>
      </div>
    </div>
  );
}

// ─── Page 9: Waktu Persiapan & Kerangka Cepat (Figma node 339:2254) ────────────
function LessonPage9({ onNext, onBack }) {
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [notes, setNotes] = useState({
    point1: "",
    point2: "",
    point3: "",
  });

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleNoteChange = (key, value) => {
    setNotes((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="modul7-lesson-page modul7-lesson-page-dark" data-node-id="339:2254" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={9} totalSteps={12} onBack={onBack} isDark={true} />

      <div className="modul7-lesson-content modul7-page9-content" data-node-id="339:2255">
        {/* Waktu Persiapan Top Banner */}
        <div className="modul7-page9-timer-banner" data-node-id="339:2296">
          <span className="modul7-page9-timer-label" data-node-id="339:2300">
            Waktu Persiapan
          </span>
          <span className="modul7-page9-timer-value" data-node-id="339:2305">
            {formatTimer(secondsLeft)}
          </span>
        </div>

        {/* Theme Question Header */}
        <div className="modul7-page9-theme-wrapper" data-node-id="339:2256">
          <p className="modul7-page9-topic-title" data-node-id="339:2258">
            “Apakah belajar sambil mendengarkan musik membuatmu lebih fokus?”
          </p>
          <p className="modul7-page9-topic-subtitle" data-node-id="339:2311">
            Apa pendapatmu?
          </p>
        </div>

        {/* Kerangka Cepat Container */}
        <div className="modul7-page9-framework-box" data-node-id="339:2276">
          <div className="modul7-page9-framework-header" data-node-id="339:2313">
            <span className="modul7-page9-framework-title" data-node-id="339:2309">
              Kerangka cepat
            </span>
            <span className="modul7-page9-framework-optional" data-node-id="339:2312">
              Opsional
            </span>
          </div>

          {/* Card 1 */}
          <div className={`modul7-page9-framework-card ${notes.point1 ? "has-value" : ""}`} data-node-id="339:2277">
            <div className="modul7-framework-badge" data-node-id="339:2278">
              1
            </div>
            <textarea
              className="modul7-framework-textarea"
              placeholder="Pendapat utama: aku setuju/tidak setuju karena..."
              value={notes.point1}
              onChange={(e) => handleNoteChange("point1", e.target.value)}
              rows={2}
              data-node-id="339:2315"
            />
          </div>

          {/* Card 2 */}
          <div className={`modul7-page9-framework-card ${notes.point2 ? "has-value" : ""}`} data-node-id="339:2283">
            <div className="modul7-framework-badge" data-node-id="339:2284">
              2
            </div>
            <textarea
              className="modul7-framework-textarea"
              placeholder="Alasan atau contoh yang mendukung..."
              value={notes.point2}
              onChange={(e) => handleNoteChange("point2", e.target.value)}
              rows={2}
              data-node-id="339:2317"
            />
          </div>

          {/* Card 3 */}
          <div className={`modul7-page9-framework-card ${notes.point3 ? "has-value" : ""}`} data-node-id="339:2289">
            <div className="modul7-framework-badge" data-node-id="339:2290">
              3
            </div>
            <textarea
              className="modul7-framework-textarea"
              placeholder="Kesimpulan atau solusi yang bisa dilakukan..."
              value={notes.point3}
              onChange={(e) => handleNoteChange("point3", e.target.value)}
              rows={2}
              data-node-id="339:2320"
            />
          </div>
        </div>
      </div>

      {/* Single CTA Button Footer */}
      <div className="modul7-lesson-cta-wrapper" data-node-id="339:2268">
        <button
          type="button"
          className="btn-modul7-next"
          onClick={onNext}
          data-node-id="339:2274"
        >
          Mulai Bicara
        </button>
      </div>
    </div>
  );
}

// ─── Page 10: Sampaikan Pendapatmu & Real Mic Wave (Figma node 339:2362) ──────
function LessonPage10({ onNext, onBack }) {
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [audioLevels, setAudioLevels] = useState([39, 15, 26, 26, 39]);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const streamRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Timer countdown
  useEffect(() => {
    if (secondsLeft <= 0) {
      handleFinish();
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  // Real Microphone Stream & Wave Analyzer
  useEffect(() => {
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

          // Sample 5 frequency bands for live heights
          const b1 = dataArray[1] || 0;
          const b2 = dataArray[3] || 0;
          const b3 = dataArray[6] || 0;
          const b4 = dataArray[9] || 0;
          const b5 = dataArray[12] || 0;

          const rawBands = [b1, b2, b3, b4, b5];
          const newLevels = rawBands.map((val) => {
            const height = 10 + (val / 255) * 40;
            return Math.max(8, Math.min(52, height));
          });

          setAudioLevels(newLevels);
          animationFrameRef.current = requestAnimationFrame(updateWave);
        };

        updateWave();
      } catch (err) {
        console.warn("Microphone access not available, using dynamic fallback wave:", err);
        const interval = setInterval(() => {
          if (!isMounted) return;
          const time = Date.now() / 150;
          setAudioLevels([
            24 + Math.sin(time) * 14,
            15 + Math.cos(time * 1.5) * 8,
            30 + Math.sin(time * 0.8) * 18,
            24 + Math.cos(time * 1.2) * 14,
            36 + Math.sin(time * 1.8) * 12,
          ]);
        }, 60);
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
  }, []);

  const handleFinish = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close().catch(() => {});
    }
    onNext();
  };

  const handleBack = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close().catch(() => {});
    }
    onBack();
  };

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="modul7-lesson-page modul7-lesson-page-dark" data-node-id="339:2362" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={10} totalSteps={12} onBack={handleBack} isDark={true} />

      <div className="modul7-lesson-content modul7-page10-content" data-node-id="339:2363">
        {/* Title Heading */}
        <h2 className="modul7-page10-title" data-node-id="339:2387">
          Sampaikan pendapatmu
        </h2>

        {/* Big Green Timer Circle */}
        <div className="modul7-page10-timer-circle" data-node-id="339:2384">
          <span className="modul7-page10-circle-time" data-node-id="339:2385">
            {formatTimer(secondsLeft)}
          </span>
        </div>

        {/* Real-time Interactive Audio Wave */}
        <div className="modul7-page10-audio-wave" data-node-id="339:2392">
          {audioLevels.map((level, idx) => (
            <div
              key={idx}
              className="modul7-wave-bar"
              style={{ height: `${level}px` }}
              data-node-id={`wave-bar-${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Selesai Bicara Red Button Footer */}
      <div className="modul7-lesson-cta-wrapper" data-node-id="339:2376">
        <button
          type="button"
          className="btn-modul7-finish-speaking"
          onClick={handleFinish}
          data-node-id="339:2382"
        >
          Selesai Bicara
        </button>
      </div>
    </div>
  );
}

// ─── Page 11: Argumenmu sudah siap! (Figma node 339:2395) ────────────────────
function LessonPage11({ onNext, onBack }) {
  return (
    <div className="modul7-lesson-page modul7-lesson-page-dark" data-node-id="339:2395" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={11} totalSteps={12} onBack={onBack} isDark={true} />

      <div className="modul7-lesson-content modul7-page11-content" data-node-id="339:2396">
        {/* Stage Hero Image */}
        <div className="modul7-page11-hero-wrapper" data-node-id="339:2429">
          <img
            src={imgMascottSenyum}
            alt="Argumenmu sudah siap"
            className="modul7-page11-hero-img"
          />
        </div>

        {/* Title Header */}
        <div className="modul7-page11-text-wrapper" data-node-id="339:2438">
          <h2 className="modul7-page11-title" data-node-id="339:2397">
            Argumenmu sudah siap!
          </h2>
          <p className="modul7-page11-subtitle" data-node-id="339:2436">
            Sekarang, kita latihan mempertahankan pendapatmu saat ada orang yang bertanya.
          </p>
        </div>

        {/* Selanjutnya Next Info Box */}
        <div className="modul7-page11-next-card" data-node-id="339:2445">
          <p className="modul7-page11-next-title" data-node-id="339:2446">
            Selanjutnya
          </p>
          <p className="modul7-page11-next-desc" data-node-id="339:2447">
            Kamu akan menjawab 2 pertanyaan tentang pendapatmu.
          </p>
        </div>
      </div>

      {/* Single CTA Button Footer */}
      <div className="modul7-lesson-cta-wrapper" data-node-id="339:2421">
        <button
          type="button"
          className="btn-modul7-next"
          onClick={onNext}
          data-node-id="339:2422"
        >
          Mulai Tanya Jawab
        </button>
      </div>
    </div>
  );
}

// ─── Page 12: Pertanyaan #1 Prompt (Figma node 339:2449) ──────────────────────
function LessonPage12({ onNext, onBack }) {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (countdown <= 0) {
      onNext();
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown, onNext]);

  return (
    <div className="modul7-lesson-page modul7-lesson-page-dark" data-node-id="339:2449" data-name="Lesson-Hadapi Pertanyaan Menantang">
      <LessonTopBar currentStep={12} totalSteps={12} onBack={onBack} isDark={true} />

      <div className="modul7-lesson-content modul7-page12-content" data-node-id="339:2450">
        {/* Top Step Counter 1/2 */}
        <p className="modul7-page12-counter" data-node-id="339:2635">
          1/2
        </p>

        {/* Center Question Wrapper */}
        <div className="modul7-page12-question-wrapper" data-node-id="339:2472">
          <p className="modul7-page12-question-label" data-node-id="339:2473">
            Pertanyaan #1
          </p>
          <p className="modul7-page12-question-text" data-node-id="339:2474">
            “Kamu bilang musik membantu fokus. Bagaimana kamu membuktikan bahwa fokusmu meningkat karena musik, bukan karena kamu memang sedang mengerjakan tugas yang lebih mudah atau sedang lebih termotivasi hari itu?”
          </p>
        </div>

        {/* Auto start countdown */}
        <p className="modul7-page12-countdown-text" data-node-id="339:2513">
          Mulai otomatis dalam {countdown}
        </p>
      </div>

      {/* Single CTA Button Footer */}
      <div className="modul7-lesson-cta-wrapper" data-node-id="339:2515">
        <button
          type="button"
          className="btn-modul7-next"
          onClick={onNext}
          data-node-id="339:2516"
        >
          Mulai Jawab
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
      if (prev === 7) return 8;
      if (prev === 8) return 9;
      if (prev === 9) return 10;
      if (prev === 10) return 11;
      if (prev === 11) return 12;
      if (prev === 12) return "completed";
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
      if (prev === 5) return 5;
      if (prev === 6) return 5;
      if (prev === 7) return 6;
      if (prev === 8) return 7;
      if (prev === 9) return 8;
      if (prev === 10) return 9;
      if (prev === 11) return 10;
      if (prev === 12) return 11;
      if (prev === "completed") return 12;
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
      {step === 8 && <LessonPage8 onNext={goNext} onBack={goPrev} />}
      {step === 9 && <LessonPage9 onNext={goNext} onBack={goPrev} />}
      {step === 10 && <LessonPage10 onNext={goNext} onBack={goPrev} />}
      {step === 11 && <LessonPage11 onNext={goNext} onBack={goPrev} />}
      {step === 12 && <LessonPage12 onNext={goNext} onBack={goPrev} />}
      {step === "completed" && <CompletedLesson onFinish={onFinish} />}
    </div>
  );
}
