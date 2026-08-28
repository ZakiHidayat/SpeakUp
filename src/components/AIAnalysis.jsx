import React from "react";
import "./AIAnalysis.css";

// Asset imports
import analysisHero from "../assets/pages_assets/ai_analysis/analysis_hero.png";
import iconQuote from "../assets/pages_assets/ai_analysis/icon_quote.svg";
import iconSpeed from "../assets/pages_assets/ai_analysis/icon_speed.svg";
import iconMouth from "../assets/pages_assets/ai_analysis/icon_mouth.svg";
import iconFlash from "../assets/pages_assets/ai_analysis/icon_flash.svg";

// ─── Analysis data model (mock / can be replaced with real AI results) ─────
const DEFAULT_ANALYSIS = {
  headline: "Kamu keren!",
  subheadline: "Mantap!",
  description:
    "Dengan latihan yang konsisten, kamu akan semakin mahir dan percaya diri dalam berbicara!",
  metrics: [
    {
      id: "filler",
      icon: iconQuote,
      name: "Kata Pengisi",
      label: "(Filler Word)",
      value: 8,
      unit: "Kali",
      badge: "Perlu Latihan",
      badgeType: "warning",
      color: "#996515",
    },
    {
      id: "pace",
      icon: iconSpeed,
      name: "Kecepatan",
      label: "(Pace)",
      value: 146,
      unit: "wpm",
      badge: "Stabil",
      badgeType: "success",
      color: "#277A5B",
    },
    {
      id: "articulation",
      icon: iconMouth,
      name: "Kejelasan",
      label: "(Articulation)",
      value: 88,
      unit: "/ 100",
      badge: "Baik",
      badgeType: "success",
      color: "#277A5B",
    },
    {
      id: "energy",
      icon: iconFlash,
      name: "Energi & Intonasi",
      label: "(Energy)",
      value: 58,
      unit: "/ 100",
      badge: "Perlu Latihan",
      badgeType: "warning",
      color: "#996515",
    },
  ],
};

function MetricCard({ metric }) {
  const isWarning = metric.badgeType === "warning";

  return (
    <div
      className={`metric-card ${isWarning ? "metric-card--warning" : "metric-card--success"}`}
      data-node-id="215:4924"
    >
      <div className="metric-card-header">
        <div className="metric-icon-wrapper">
          <img src={metric.icon} alt="" className="metric-icon" />
        </div>
        <div className="metric-name-block">
          <p className="metric-name">{metric.name}</p>
          <p className="metric-label-sub">{metric.label}</p>
        </div>
      </div>

      <div className="metric-value-row">
        <span
          className="metric-value"
          style={{ color: metric.color }}
        >
          {metric.value}
        </span>
        <span className="metric-unit" style={{ color: metric.color }}>
          {metric.unit}
        </span>
      </div>

      <div className={`metric-badge metric-badge--${metric.badgeType}`}>
        {metric.badge}
      </div>
    </div>
  );
}

export default function AIAnalysis({ analysis = DEFAULT_ANALYSIS, onContinue }) {
  return (
    <div
      className="analysis-screen"
      data-node-id="211:4914"
      data-name="Analysis"
    >
      {/* ── Scrollable Body ──────────────────────────────────── */}
      <div className="analysis-scroll-body">
        {/* ── Hero image ─────────────────────────────────────── */}
        <div className="analysis-hero-container" data-node-id="219:156">
          <img
            src={analysisHero}
            alt="Kamu keren!"
            className="analysis-hero-image"
          />
        </div>

        {/* ── Text + Metrics ─────────────────────────────────── */}
        <div className="analysis-content" data-node-id="215:5022">
          <div className="analysis-title-block" data-node-id="219:203">
            <div data-node-id="236:499">
              <p className="analysis-sub-headline" data-node-id="215:4920">
                {analysis.subheadline}
              </p>
              <h1 className="analysis-headline" data-node-id="219:202">
                {analysis.headline}
              </h1>
            </div>
            <p className="analysis-description" data-node-id="236:497">
              {analysis.description}
            </p>
          </div>

          {/* 2×2 Metrics Grid */}
          <div className="analysis-metrics-grid" data-node-id="215:4923">
            {analysis.metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Fixed Bottom 40px CTA Footer ────────────────────── */}
      <div className="analysis-cta-wrapper">
        <button
          type="button"
          className="btn-analysis-continue"
          onClick={onContinue}
          data-node-id="219:160"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}
