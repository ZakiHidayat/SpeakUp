import React, { useState } from "react";
import "./SimulasiScreen.css";

// ─── Scenario Images ─────────────────────────────────────────────────────────
import imgSpontan from "../assets/pages_assets/simulasi/Image-Spontan.png";
import imgPresentasi from "../assets/pages_assets/simulasi/Image-Presentasi.png";
import imgInterview from "../assets/pages_assets/simulasi/Image-Interview.png";

// ─── Bottom Navigation Icons ────────────────────────────────────────────────
import iconNavHome from "../assets/pages_assets/bottom-nav-icons/Home.svg";
import iconNavMic from "../assets/pages_assets/bottom-nav-icons/Mic.svg";
import iconNavGroup from "../assets/pages_assets/bottom-nav-icons/Group.svg";
import iconNavUser from "../assets/pages_assets/bottom-nav-icons/User.svg";

export default function SimulasiScreen({
  onNavigateHome,
  onNavigateGroup,
  onNavigateProfile,
  onSelectScenario,
}) {
  const [selectedCard, setSelectedCard] = useState(null);

  const scenarios = [
    {
      id: "spontan",
      title: "Spontan",
      description: "1 topik acak. Latih bicaramu secara langsung tanpa persiapan sama sekali.",
      image: imgSpontan,
      nodeId: "350:3623",
    },
    {
      id: "presentasi",
      title: "Presentasi",
      description: "Pemaparan materi. Latih caramu bicara agar terstruktur dan percaya diri.",
      image: imgPresentasi,
      nodeId: "350:3614",
    },
    {
      id: "interview",
      title: "Interview",
      description: "Simulasi tanya-jawab. Latih caramu merespon pertanyaan sulit dengan tenang.",
      image: imgInterview,
      nodeId: "350:3578",
    },
  ];

  const handleCardClick = (scenario) => {
    setSelectedCard(scenario.id);
    if (onSelectScenario) {
      onSelectScenario(scenario);
    } else {
      alert(`Memulai Simulasi: ${scenario.title}`);
    }
  };

  return (
    <div className="simulasi-screen" data-node-id="181:1826" data-name="Practice Area">
      {/* ── Fixed Top Bar ────────────────────────────────────────── */}
      <header className="simulasi-topbar" data-node-id="181:1827" data-name="TopBar">
        <div className="simulasi-topbar-wrapper" data-node-id="181:1828" data-name="Wrapper">
          <h1 className="simulasi-topbar-title" data-node-id="181:1829">
            Simulasi
          </h1>
          <div className="simulasi-streak-badge" data-node-id="181:1830" data-name="Streak">
            <span className="simulasi-streak-text" data-node-id="181:1831">
              16.364 XP
            </span>
          </div>
        </div>
      </header>

      {/* ── Main Content Area ─────────────────────────────────────── */}
      <main className="simulasi-content-section" data-node-id="151:1533" data-name="Section-Practice">
        <div className="simulasi-content-container">
          <h2 className="simulasi-prompt-text" data-node-id="350:3659">
            Pilih jenis skenario yang kamu butuhkan
          </h2>

          <div className="simulasi-cards-list" data-node-id="350:3658">
            {scenarios.map((scenario) => {
              const isSelected = selectedCard === scenario.id;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  className={`simulasi-card-btn ${isSelected ? "simulasi-card-btn--selected" : ""}`}
                  onClick={() => handleCardClick(scenario)}
                  data-node-id={scenario.nodeId}
                  data-name="CardButton-RapidTopicChallenge"
                >
                  <div className="simulasi-card-img-container" data-name="Image-Container">
                    <img
                      src={scenario.image}
                      alt={scenario.title}
                      className="simulasi-card-img"
                    />
                  </div>
                  <div className="simulasi-card-text-wrapper" data-name="Text-Wrapper">
                    <span className="simulasi-card-title">
                      {scenario.title}
                    </span>
                    <p className="simulasi-card-description">
                      {scenario.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* ── Floating Pill Bottom Navigation ───────────────────────── */}
      <nav className="home-bottom-nav simulasi-bottom-nav" data-node-id="350:3300" data-name="BottomNavigation">
        <button
          type="button"
          className="home-nav-item"
          onClick={onNavigateHome}
          aria-label="Home"
          data-node-id="350:3301"
        >
          <img src={iconNavHome} alt="Home" className="home-nav-icon" />
        </button>
        <button
          type="button"
          className="home-nav-item home-nav-item--active"
          aria-label="Simulasi"
          data-node-id="350:3309"
        >
          <img src={iconNavMic} alt="Simulasi" className="home-nav-icon home-nav-icon--active" />
        </button>
        <button
          type="button"
          className="home-nav-item"
          onClick={onNavigateGroup}
          aria-label="Community"
          data-node-id="350:3305"
        >
          <img src={iconNavGroup} alt="Community" className="home-nav-icon" />
        </button>
        <button
          type="button"
          className="home-nav-item"
          onClick={onNavigateProfile}
          aria-label="Profile"
          data-node-id="350:3313"
        >
          <img src={iconNavUser} alt="Profile" className="home-nav-icon" />
        </button>
      </nav>
    </div>
  );
}
