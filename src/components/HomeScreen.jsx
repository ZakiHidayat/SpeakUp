import React, { useState } from "react";
import "./HomeScreen.css";

// ─── Assets ──────────────────────────────────────────────────────────────────
import todaysLessonImg from "../assets/pages_assets/modul_details/modul_7/Image-Lesson6.png";
import cardBgDecor from "../assets/pages_assets/home/Card-bg-decor.svg";
// Module illustrations
import imgModul1 from "../assets/pages_assets/home/modul/Image-Modul1.png";
import imgModul2 from "../assets/pages_assets/home/modul/Image-Modul2.png";
import imgModul3 from "../assets/pages_assets/home/modul/Image-Modul3.png";
import imgModul4 from "../assets/pages_assets/home/modul/Image-Modul4.png";
import imgModul5 from "../assets/pages_assets/home/modul/Image-Modul5.png";
import imgModul6 from "../assets/pages_assets/home/modul/Image-Modul6.png";
import imgModul7 from "../assets/pages_assets/home/modul/Image-Modul7.png";
import imgModul8 from "../assets/pages_assets/home/modul/Image-Modul8.png";

// Streak assets
import fireActiveImg from "../assets/pages_assets/home/Fire-Image-Active-DayPast.png";
import fireTodayGif from "../assets/pages_assets/home/Fire-Streak-Active-Today.gif";
import circleInactiveImg from "../assets/pages_assets/home/Circle-StreakInactive.svg";

// Icon assets
import iconPlay from "../assets/pages_assets/home/icons/Play-Icon.svg";
import iconBook from "../assets/pages_assets/home/icons/Book-Outline.svg";

// Bottom nav icons
import iconNavHome from "../assets/pages_assets/bottom-nav-icons/Home.svg";
import iconNavMic from "../assets/pages_assets/bottom-nav-icons/Mic.svg";
import iconNavGroup from "../assets/pages_assets/bottom-nav-icons/Group.svg";
import iconNavUser from "../assets/pages_assets/bottom-nav-icons/User.svg";

// ─── Inline icon for progress (no asset provided) ────────────────────────────
const IconProgress = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="5.5" stroke="#DA5000" strokeWidth="1.5" strokeDasharray="4 2"/>
    <path d="M8 5V8L10 10" stroke="#DA5000" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const STREAK_DAYS = [
  { label: "Sen", active: true },
  { label: "Sel", active: true },
  { label: "Rab", active: true },
  { label: "Kam", active: true, today: true },
  { label: "Jum", active: false },
  { label: "Sab", active: false },
  { label: "Min", active: false },
];

const MODULES = [
  { id: 1, module: "Modul 1", title: "Kenali Suaramu", lessons: 4, progress: "4/4", image: imgModul1, active: false, highlight: false, tag: null },
  { id: 2, module: "Modul 2", title: "Fondasi Suara dan Tubuh", lessons: 6, progress: "6/6", image: imgModul2, active: false, highlight: false, tag: "Testing available" },
  { id: 3, module: "Modul 3", title: "Berani di Ruang Kelas", lessons: 6, progress: "6/6", image: imgModul3, active: false, highlight: false, tag: null },
  { id: 4, module: "Modul 4", title: "Percaya Diri di Depan Kamera", lessons: 6, progress: "6/6", image: imgModul4, active: false, highlight: false, tag: null },
  { id: 5, module: "Modul 5", title: "Bicara dengan Wibawa", lessons: 6, progress: "6/6", image: imgModul5, active: false, highlight: false, tag: null },
  { id: 6, module: "Modul 6", title: "Kuasai Panggung", lessons: 5, progress: "5/5", image: imgModul6, active: false, highlight: false, tag: null },
  { id: 7, module: "Modul 7", title: "Keahlian Tanya Jawab", lessons: 6, progress: "1/6", image: imgModul7, active: true, highlight: true, tag: "Testing available" },
  { id: 8, module: "Modul 8", title: "Berani di Dunia Nyata", lessons: 5, progress: "0/5", image: imgModul8, active: false, highlight: false, tag: null, inactive: true },
];

// ─── Module illustration colors (alternating per Figma) ─────────────────────
const MODULE_COLORS = [
  "#F0FBF8", "#EFF8FF", "#FFF8F0", "#F4F0FF",
  "#F0FBF8", "#FFF0F5", "#F0FFF4", "#FFF5EE",
];

export default function HomeScreen({
  userName,
  onSelectModule,
  onNavigatePractice,
  onNavigateGroup,
  onNavigateProfile,
}) {
  const displayName = userName?.trim() || "Nadine Euvania";
  const [activeTab, setActiveTab] = useState("home");

  const handleModuleClick = (mod) => {
    const isAvailable = Boolean(mod?.active || (mod?.tag && mod.tag.toLowerCase().includes("testing")));
    if (isAvailable) {
      onSelectModule?.(mod);
    }
  };

  return (
    <div className="home-screen" data-node-id="29:7" data-name="Home">
      {/* ── Top Bar ─────────────────────────────────────────────── */}
      <div className="home-topbar" data-node-id="31:328">
        <h2 className="home-topbar-greeting">Hi, {displayName}</h2>
        <div className="home-xp-badge" data-node-id="136:1380">
          <span className="home-xp-text">16.364 XP</span>
        </div>
      </div>

      {/* ── Scrollable Body ─────────────────────────────────────── */}
      <div className="home-scroll-body">
        <div className="home-content">
          
          {/* ── Streak Section ────────────────────────────────── */}
          <div className="home-streak-section" data-node-id="31:332">
            <p className="home-streak-title" data-node-id="31:333">4 Hari Streak!</p>
            <p className="home-streak-subtitle" data-node-id="31:334">
              Latihan tiap hari biar kemampuan bicaramu makin terasah.
            </p>

            <div className="home-streak-days-list" data-node-id="31:335">
              {STREAK_DAYS.map((day) => (
                <div key={day.id} className="home-streak-day-col" data-node-id={day.nodeId}>
                  <div className="home-streak-icon-wrap" data-node-id={day.circleNodeId}>
                    {day.status === "past" && (
                      <img src={fireActiveImg} alt="Active Streak" className="home-streak-fire-img" />
                    )}
                    {day.status === "today" && (
                      <img src={fireTodayGif} alt="Today Streak" className="home-streak-fire-gif" />
                    )}
                    {day.status === "inactive" && (
                      <img src={circleInactiveImg} alt="Inactive" className="home-streak-circle-img" />
                    )}
                  </div>
                  <span className={`home-streak-day-label ${day.status !== "inactive" ? "active" : ""}`}>
                    {day.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Today's Lesson Section ────────────────────────── */}
          <div className="home-todays-lesson-section" data-node-id="136:1385">
            <div
              className="home-todays-lesson-card"
              onClick={() => handleModuleClick(MODULES.find((m) => m.id === 7) || MODULES[6])}
              data-node-id="136:1386"
              style={{ cursor: "pointer" }}
            >
              <div className="home-lesson-bg-decor" aria-hidden="true" data-node-id="136:1387">
                <img src={cardBgDecor} alt="" className="home-lesson-bg-decor-img" />
              </div>
              <div className="home-lesson-content" data-node-id="136:1388">
                <div className="home-lesson-text-block">
                  <p className="home-lesson-subtitle">Pelajaran Hari ini</p>
                  <p className="home-lesson-title">Hadapi Pertanyaan Menantang</p>
                  <p className="home-lesson-module">Modul 7 - Keahlian Tanya Jawab</p>
                </div>
                <div className="home-lesson-image-wrapper" data-node-id="136:1390">
                  <img src={todaysLessonImg} alt="Hadapi Pertanyaan Menantang" className="home-lesson-image" />
                </div>
              </div>
            </div>

            {/* Mulai Pelajaran Button */}
            <button
              type="button"
              className="btn-mulai-pelajaran"
              onClick={() => handleModuleClick(MODULES.find((m) => m.id === 7) || MODULES[6])}
              data-node-id="136:1414"
            >
              <img src={iconPlay} alt="" className="btn-play-icon" />
              <span>Mulai Pelajaran</span>
            </button>
          </div>

          {/* ── Course Section ────────────────────────────────── */}
          <div className="home-course-section" data-node-id="75:802">
            <h3 className="home-course-heading">Kursus</h3>
            <div className="home-course-list" data-node-id="75:851">
              {MODULES.map((mod, i) => {
                const isAvailable = Boolean(mod.active || (mod.tag && mod.tag.toLowerCase().includes("testing")));
                return (
                  <div
                    key={mod.id}
                    className={`home-module-card ${mod.active ? "home-module-card--active" : ""} ${mod.inactive ? "home-module-card--inactive" : ""} ${isAvailable ? "home-module-card--available" : ""}`}
                    onClick={() => handleModuleClick(mod)}
                    style={{ cursor: isAvailable ? "pointer" : "default" }}
                    data-node-id={`module-${mod.id}`}
                  >
                    {/* Left content: Tag, title, lessons count, progress */}
                    <div className="home-module-info">
                      {mod.tag && (
                        <div className="home-module-tag-wrapper">
                          <span className="home-module-tag">{mod.tag}</span>
                        </div>
                      )}
                      <h4 className="home-module-title">{mod.module} - {mod.title}</h4>
                      
                      <div className="home-module-meta-row">
                        <div className="home-module-lessons-count">
                          <img src={iconBook} alt="" className="home-module-book-icon" />
                          <span>{mod.lessons} Pelajaran</span>
                        </div>
                        <div className="home-module-progress-chip">
                          <IconProgress />
                          <span>{mod.progress}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right illustration */}
                    <div
                      className={`home-module-illus ${mod.active ? "home-module-illus--active" : ""}`}
                      style={{ backgroundColor: MODULE_COLORS[i % MODULE_COLORS.length] }}
                    >
                      <img
                        src={mod.image}
                        alt={mod.title}
                        className="home-module-illus-img"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Navigation Pill ───────────────────────────────── */}
      <div className="home-bottom-nav" data-node-id="31:314">
        <button
          type="button"
          className={`home-nav-item ${activeTab === "home" ? "home-nav-item--active" : ""}`}
          onClick={() => setActiveTab("home")}
          aria-label="Home"
        >
          <img src={iconNavHome} alt="Home" className={`home-nav-icon ${activeTab === "home" ? "home-nav-icon--active" : ""}`} />
        </button>
        <button
          type="button"
          className={`home-nav-item ${activeTab === "mic" ? "home-nav-item--active" : ""}`}
          onClick={() => {
            setActiveTab("mic");
            onNavigatePractice?.();
          }}
          aria-label="Practice"
        >
          <img src={iconNavMic} alt="Practice" className={`home-nav-icon ${activeTab === "mic" ? "home-nav-icon--active" : ""}`} />
        </button>
        <button
          type="button"
          className={`home-nav-item ${activeTab === "group" ? "home-nav-item--active" : ""}`}
          onClick={() => {
            setActiveTab("group");
            onNavigateGroup?.();
          }}
          aria-label="Community"
        >
          <img src={iconNavGroup} alt="Community" className={`home-nav-icon ${activeTab === "group" ? "home-nav-icon--active" : ""}`} />
        </button>
        <button
          type="button"
          className={`home-nav-item ${activeTab === "user" ? "home-nav-item--active" : ""}`}
          onClick={() => {
            setActiveTab("user");
            onNavigateProfile?.();
          }}
          aria-label="Profile"
        >
          <img src={iconNavUser} alt="Profile" className={`home-nav-icon ${activeTab === "user" ? "home-nav-icon--active" : ""}`} />
        </button>
      </div>
    </div>
  );
}
