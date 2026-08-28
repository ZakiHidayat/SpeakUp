import React from "react";
import "./AIAnalysis.css";

// ─── Asset Imports ───────────────────────────────────────────────────────────
import analysisHero from "../assets/pages_assets/ai_analysis/analysis_hero.png";
import iconArgument from "../assets/pages_assets/ai_analysis/Argument-Icon.svg";
import iconRelevance from "../assets/pages_assets/ai_analysis/Relevance-Icon.svg";
import iconQuote from "../assets/pages_assets/ai_analysis/Quote-Icon.svg";
import iconSpeed from "../assets/pages_assets/ai_analysis/Speed-Icon.svg";
import iconMouth from "../assets/pages_assets/ai_analysis/Mouth-Icon.svg";
import iconFlash from "../assets/pages_assets/ai_analysis/Flash-Icon.svg";
import iconFeedbackAI from "../assets/pages_assets/ai_analysis/AI.svg";

// ─── Analysis Data Model ─────────────────────────────────────────────────────
const DEFAULT_ANALYSIS = {
  badge: "Mantap!",
  headline: "Kamu keren!",
  description:
    "Dengan latihan yang konsisten, kamu akan semakin mahir dan percaya diri dalam berbicara!",
  detailedMetrics: [
    {
      id: "argument",
      icon: iconArgument,
      title: "Argumen",
      score: "88",
      maxScore: "/ 100",
      note: "Pendapatmu jelas dan didukung alasan yang relevan.",
      badgeText: "Kuat",
      badgeType: "success",
      color: "#277A5B",
      nodeId: "390:3915",
    },
    {
      id: "relevance",
      icon: iconRelevance,
      title: "Relevansi",
      score: "88",
      maxScore: "/ 100",
      note: "Pendapatmu jelas dan didukung alasan yang relevan.",
      badgeText: "Relevan",
      badgeType: "success",
      color: "#277A5B",
      nodeId: "394:4017",
    },
  ],
  gridMetrics: [
    {
      id: "filler",
      icon: iconQuote,
      title: "Kata Pengisi",
      score: "20",
      unit: "Kali",
      badgeText: "Perlu Latihan",
      badgeType: "warning",
      color: "#996515",
      badgeColor: "#B68147",
      badgeBg: "rgba(182, 129, 71, 0.12)",
      nodeId: "215:4924",
    },
    {
      id: "speed",
      icon: iconSpeed,
      title: "Kecepatan",
      score: "146",
      unit: "wpm",
      badgeText: "Stabil",
      badgeType: "success",
      color: "#277A5B",
      badgeColor: "#009F7A",
      badgeBg: "rgba(0, 159, 122, 0.14)",
      nodeId: "215:4980",
    },
    {
      id: "articulation",
      icon: iconMouth,
      title: "Kejelasan",
      score: "88",
      unit: "/ 100",
      badgeText: "Baik",
      badgeType: "success",
      color: "#277A5B",
      badgeColor: "#009F7A",
      badgeBg: "rgba(0, 159, 122, 0.14)",
      nodeId: "215:4988",
    },
    {
      id: "energy",
      icon: iconFlash,
      title: "Energi & Intonasi",
      score: "58",
      unit: "/ 100",
      badgeText: "Perlu Latihan",
      badgeType: "warning",
      color: "#996515",
      badgeColor: "#B68147",
      badgeBg: "rgba(182, 129, 71, 0.12)",
      nodeId: "215:4996",
    },
  ],
  aiFeedback:
    "Kamu sudah menjawab pertanyaan dengan relevan dan menyampaikan argumen yang cukup kuat. Fokus berikutnya: Kurangi kata pengisi saat berpindah dari satu alasan ke alasan berikutnya.",
};

export default function AIAnalysis({ analysis = DEFAULT_ANALYSIS, onContinue }) {
  return (
    <div className="analysis-screen" data-node-id="211:4914" data-name="Analysis">
      {/* ── Scrollable Body ──────────────────────────────────── */}
      <div className="analysis-scroll-body">
        {/* ── Hero Image Banner ───────────────────────────────── */}
        <div className="analysis-hero-container" data-node-id="299:304" data-name="Image-Container">
          <div className="analysis-hero-image-wrapper" data-node-id="219:156" data-name="Image">
            <img
              src={analysisHero}
              alt={analysis.headline || "Kamu keren!"}
              className="analysis-hero-image"
            />
          </div>
        </div>

        {/* ── Section Result Content ─────────────────────────── */}
        <div className="analysis-content" data-node-id="215:5022" data-name="Section-Result">
          {/* Header Text Block */}
          <div className="analysis-title-block" data-node-id="219:203" data-name="Text-Wrapper">
            <div className="analysis-title-wrapper" data-node-id="236:499" data-name="Wrapper">
              <p className="analysis-sub-headline" data-node-id="215:4920">
                {analysis.badge || "Mantap!"}
              </p>
              <h1 className="analysis-headline" data-node-id="219:202">
                {analysis.headline || "Kamu keren!"}
              </h1>
            </div>
            <p className="analysis-description" data-node-id="236:497">
              {analysis.description ||
                "Dengan latihan yang konsisten, kamu akan semakin mahir dan percaya diri dalam berbicara!"}
            </p>
          </div>

          {/* Argumen & Relevansi Cards (Full Width) */}
          <div className="analysis-detailed-wrapper" data-node-id="390:3914" data-name="ArgumenRelevansi-Wrapper">
            {analysis.detailedMetrics.map((item) => (
              <div
                key={item.id}
                className="analysis-detailed-card"
                data-node-id={item.nodeId}
                data-name="Card-Pace"
              >
                <div className="analysis-detailed-header">
                  <div className="analysis-detailed-title-group">
                    <div className="analysis-metric-icon-box">
                      <img src={item.icon} alt={item.title} className="analysis-metric-icon" />
                    </div>
                    <span className="analysis-detailed-title">{item.title}</span>
                  </div>
                  <div className="analysis-detailed-score-group">
                    <span className="analysis-score-number" style={{ color: item.color }}>
                      {item.score}
                    </span>
                    <span className="analysis-score-unit" style={{ color: item.color }}>
                      {item.maxScore}
                    </span>
                  </div>
                </div>

                <div className="analysis-detailed-note-box">
                  <p className="analysis-detailed-note-text">{item.note}</p>
                </div>

                <div className="analysis-detailed-badge-container">
                  <span className="analysis-detailed-badge-text">{item.badgeText}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 2×2 Metrics Grid */}
          <div className="analysis-metrics-grid" data-node-id="215:4923" data-name="Grid">
            {analysis.gridMetrics.map((metric) => (
              <div
                key={metric.id}
                className="analysis-grid-card"
                data-node-id={metric.nodeId}
                data-name={metric.title}
              >
                <div className="analysis-grid-card-top">
                  <div className="analysis-metric-icon-box">
                    <img src={metric.icon} alt={metric.title} className="analysis-metric-icon" />
                  </div>
                  <span className="analysis-grid-title">{metric.title}</span>
                </div>

                <div className="analysis-grid-score-group">
                  <span className="analysis-grid-score-number" style={{ color: metric.color }}>
                    {metric.score}
                  </span>
                  <span className="analysis-grid-score-unit" style={{ color: metric.color }}>
                    {metric.unit}
                  </span>
                </div>

                <div
                  className="analysis-grid-badge"
                  style={{ backgroundColor: metric.badgeBg }}
                >
                  <span
                    className="analysis-grid-badge-text"
                    style={{ color: metric.badgeColor }}
                  >
                    {metric.badgeText}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback AI Card */}
          <div className="analysis-feedback-wrapper" data-node-id="390:3957" data-name="ArgumenRelevansi-Wrapper">
            <div className="analysis-feedback-card" data-node-id="390:3958" data-name="Card-Pace">
              <div className="analysis-feedback-header" data-node-id="390:3959" data-name="Wrapper">
                <div className="analysis-metric-icon-box" data-node-id="409:4040">
                  <img src={iconFeedbackAI} alt="Feedback AI" className="analysis-metric-icon" />
                </div>
                <span className="analysis-feedback-title" data-node-id="390:3964">
                  Feedback AI
                </span>
              </div>
              <p className="analysis-feedback-text" data-node-id="390:3994">
                {analysis.aiFeedback}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fixed Bottom 40px CTA Footer ────────────────────── */}
      <div className="analysis-cta-wrapper" data-node-id="219:160" data-name="Button-Wrapper">
        <button
          type="button"
          className="btn-analysis-continue"
          onClick={onContinue}
          data-node-id="219:161"
          data-name="Button-Large"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}
