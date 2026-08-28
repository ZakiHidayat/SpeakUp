import React, { useState, useEffect } from "react";
import "./LiveRoomScreen.css";

// Initial Q&A Questions
const INITIAL_QUESTIONS = [
  {
    id: 1,
    author: "Fauzan F.",
    avatarBg: "#E0F2FE",
    avatarColor: "#0369A1",
    avatarText: "FF",
    text: "Gimana cara ngilangin tremor di tangan pas pertama kali megang mic?",
    upvotes: 6,
    userUpvoted: false,
    time: "2 mnt lalu",
  },
  {
    id: 2,
    author: "Siti M.",
    avatarBg: "#FEF3C7",
    avatarColor: "#B45309",
    avatarText: "SM",
    text: "Tips eye-contact yang natural kalau penontonnya banyak banget kak?",
    upvotes: 4,
    userUpvoted: false,
    time: "4 mnt lalu",
  },
];

export default function LiveRoomScreen({ roomData, onLeaveRoom }) {
  const roomTitle = roomData?.title || "Public Speaking Perdana Aku";
  const speakerName = "Zaki A.";

  // Audio / Video / Call state
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCamOn, setIsCamOn] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [showMutedSnackbar, setShowMutedSnackbar] = useState(true);
  const mutedTimerRef = React.useRef(null);

  // Q&A Drawer Bottom Sheet state
  const [isQaDrawerOpen, setIsQaDrawerOpen] = useState(false);
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [newQuestionText, setNewQuestionText] = useState("");

  // Floating Reactions
  const [reactions, setReactions] = useState([]);
  const [showToast, setShowToast] = useState(null);

  // Timer
  const [secondsElapsed, setSecondsElapsed] = useState(263); // 04:23

  useEffect(() => {
    // Reset scroll on mount so parent doesn't hold previous scroll offset
    const screenContent = document.querySelector(".iphone-screen-content");
    if (screenContent) {
      screenContent.scrollTop = 0;
    }

    // Auto hide "You are muted" snackbar after 3.5 seconds
    mutedTimerRef.current = setTimeout(() => {
      setShowMutedSnackbar(false);
    }, 3500);

    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      if (mutedTimerRef.current) clearTimeout(mutedTimerRef.current);
    };
  }, []);

  const formatTimer = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const triggerToast = (msg) => {
    setShowToast(msg);
    setTimeout(() => {
      setShowToast((curr) => (curr === msg ? null : curr));
    }, 2500);
  };

  const handleSendReaction = (emoji) => {
    const id = Date.now() + Math.random();
    const xOffset = Math.floor(Math.random() * 80) - 40;
    setReactions((prev) => [...prev, { id, emoji, xOffset }]);
    setTimeout(() => {
      setReactions((prev) => prev.filter((r) => r.id !== id));
    }, 1800);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newQ = {
      id: Date.now(),
      author: "Nadine (Kamu)",
      avatarBg: "#DCFCE7",
      avatarColor: "#15803D",
      avatarText: "NE",
      text: newQuestionText.trim(),
      upvotes: 1,
      userUpvoted: true,
      time: "Baru saja",
    };

    setQuestions((prev) => [newQ, ...prev]);
    setNewQuestionText("");
    triggerToast("Pertanyaan terkirim!");
  };

  const handleUpvote = (id) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          const isUpvoted = q.userUpvoted;
          return {
            ...q,
            upvotes: isUpvoted ? q.upvotes - 1 : q.upvotes + 1,
            userUpvoted: !isUpvoted,
          };
        }
        return q;
      })
    );
  };

  return (
    <div className="teams-call-container">
      {/* ── Toast Alert ─────────────────────────────────────────── */}
      {showToast && (
        <div className="teams-toast">
          <span>{showToast}</span>
        </div>
      )}

      {/* ── Floating Reaction Emojis ─────────────────────────────── */}
      <div className="teams-floating-reactions" aria-hidden="true">
        {reactions.map((r) => (
          <span
            key={r.id}
            className="teams-flying-emoji"
            style={{ transform: `translateX(${r.xOffset}px)` }}
          >
            {r.emoji}
          </span>
        ))}
      </div>

      {/* ── Top Bar Header (Teams/Zoom Style) ─────────────────────── */}
      <div className="teams-topbar">
        <button
          type="button"
          className="teams-back-btn"
          onClick={onLeaveRoom}
          aria-label="Kembali"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="teams-header-info">
          <h1 className="teams-room-title">{roomTitle}</h1>
          <span className="teams-call-duration">{formatTimer(secondsElapsed)}</span>
        </div>

        <div className="teams-top-actions">
          {/* Grid View Icon */}
          <button type="button" className="teams-top-icon-btn" aria-label="Grid View">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>

          {/* Q&A Drawer Button */}
          <button
            type="button"
            className={`teams-top-icon-btn teams-qa-badge-btn ${isQaDrawerOpen ? "active" : ""}`}
            onClick={() => setIsQaDrawerOpen(true)}
            aria-label="Buka Q&A"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="teams-unread-dot" />
          </button>

          {/* Participants Icon */}
          <button type="button" className="teams-top-icon-btn" aria-label="Peserta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Main Conference Split Stage ─────────────────────────── */}
      <div className="teams-stage-grid">
        {/* Upper Tile: Host (Zaki A.) */}
        <div className="teams-video-tile teams-tile-host">
          <div className="teams-avatar-circle teams-avatar-host">
            <span>ZA</span>
          </div>

          <div className="teams-tile-nameplate">
            <span>{speakerName}</span>
            <span className="teams-nameplate-mic-icon">🎙️</span>
          </div>

          {/* Active Speaking Glow & Audio wave */}
          <div className="teams-host-speaking-indicator">
            <span className="teams-speaking-bar" />
            <span className="teams-speaking-bar bar-active-2" />
            <span className="teams-speaking-bar bar-active-3" />
          </div>
        </div>

        {/* Lower Tile: Self (Nadine Euvania) */}
        <div className="teams-video-tile teams-tile-self">
          <div className="teams-avatar-circle teams-avatar-self">
            <span>NE</span>
          </div>

          <div className="teams-tile-nameplate">
            <span>Nadine (Kamu)</span>
            <span className="teams-nameplate-muted-icon">🔇</span>
          </div>

          {!isMicOn && showMutedSnackbar && (
            <div className="teams-muted-status-pill">
              <span className="muted-icon">🔇</span>
              <span>You are muted</span>
            </div>
          )}

          {/* PiP Mini Floating Camera Box */}
          <div className="teams-pip-camera-box">
            <div className="teams-pip-content">
              {isCamOn ? (
                <div className="teams-pip-cam-on">
                  <span className="teams-pip-emoji">👩</span>
                </div>
              ) : (
                <div className="teams-pip-cam-off">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" />
                  </svg>
                </div>
              )}
              <button
                type="button"
                className="btn-flip-camera"
                onClick={() => triggerToast("Membalik kamera")}
                aria-label="Balik Kamera"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 2.5 1.15 4.73 2.95 6.22L4 20h6v-6l-2.4 2.4C6.2 15.1 5.2 13.2 5.2 11c0-3.76 3.04-6.8 6.8-6.8s6.8 3.04 6.8 6.8c0 2.2-1 4.1-2.6 5.4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Q&A Open Trigger Banner ───────────────────────── */}
      <button
        type="button"
        className="teams-qa-quick-trigger"
        onClick={() => setIsQaDrawerOpen(true)}
      >
        <div className="teams-qa-trigger-left">
          <span className="teams-qa-icon-bubble">💬</span>
          <div className="teams-qa-trigger-text">
            <span className="teams-qa-trigger-title">Q&A Sesi Terbuka ({questions.length} Pertanyaan)</span>
            <span className="teams-qa-trigger-sub">Ketuk untuk bertanya ke {speakerName}</span>
          </div>
        </div>
        <span className="teams-qa-trigger-arrow">▲</span>
      </button>

      {/* ── Bottom Call Controls (Teams/Zoom Style) ─────────────── */}
      <div className="teams-bottom-controls">
        {/* Camera Button */}
        <button
          type="button"
          className={`teams-call-btn ${isCamOn ? "active" : ""}`}
          onClick={() => {
            setIsCamOn(!isCamOn);
            triggerToast(!isCamOn ? "Kamera diaktifkan" : "Kamera dimatikan");
          }}
          aria-label="Kamera"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isCamOn ? (
              <>
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </>
            ) : (
              <>
                <line x1="1" y1="1" x2="23" y2="23" />
                <path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34" />
              </>
            )}
          </svg>
        </button>

        {/* Mic Button */}
        <button
          type="button"
          className={`teams-call-btn ${isMicOn ? "active" : "muted"}`}
          onClick={() => {
            const nextState = !isMicOn;
            setIsMicOn(nextState);
            if (!nextState) {
              setShowMutedSnackbar(true);
              if (mutedTimerRef.current) clearTimeout(mutedTimerRef.current);
              mutedTimerRef.current = setTimeout(() => {
                setShowMutedSnackbar(false);
              }, 3500);
            } else {
              setShowMutedSnackbar(false);
            }
            triggerToast(nextState ? "Mikrofon diaktifkan" : "Mikrofon dibisukan");
          }}
          aria-label="Mikrofon"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMicOn ? (
              <>
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </>
            ) : (
              <>
                <line x1="1" y1="1" x2="23" y2="23" />
                <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </>
            )}
          </svg>
        </button>

        {/* Speaker Button */}
        <button
          type="button"
          className={`teams-call-btn ${isSpeakerOn ? "active" : ""}`}
          onClick={() => {
            setIsSpeakerOn(!isSpeakerOn);
            triggerToast(!isSpeakerOn ? "Speaker aktif" : "Speaker nonaktif");
          }}
          aria-label="Speaker"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        </button>

        {/* Q&A Drawer Toggle Button */}
        <button
          type="button"
          className={`teams-call-btn ${isQaDrawerOpen ? "active" : ""}`}
          onClick={() => setIsQaDrawerOpen(true)}
          aria-label="Tanya Jawab"
        >
          <span style={{ fontSize: "18px" }}>❓</span>
        </button>

        {/* Reaction Emoji */}
        <button
          type="button"
          className="teams-call-btn"
          onClick={() => handleSendReaction("👏")}
          aria-label="Tepuk Tangan"
        >
          <span style={{ fontSize: "18px" }}>👏</span>
        </button>

        {/* Red End Call Button */}
        <button
          type="button"
          className="teams-end-call-btn"
          onClick={onLeaveRoom}
          aria-label="Tutup Panggilan"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6 19.8 19.8 0 0 1-3.12-8.68A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" transform="rotate(135 12 12)" />
          </svg>
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          BOTTOM SHEET DRAWER: Q&A AREA
      ════════════════════════════════════════════════════════════ */}
      <div className={`teams-drawer-backdrop ${isQaDrawerOpen ? "open" : ""}`} onClick={() => setIsQaDrawerOpen(false)}>
        <div className="teams-qa-drawer" onClick={(e) => e.stopPropagation()}>
          {/* Drag Pill Handle */}
          <div className="teams-drawer-drag-handle" />

          {/* Drawer Header */}
          <div className="teams-drawer-header">
            <div className="teams-drawer-title-group">
              <h3 className="teams-drawer-title">Q&A Sesi Tanya Jawab</h3>
              <span className="teams-drawer-qna-tag">Q&A Aktif</span>
            </div>
            <button
              type="button"
              className="teams-drawer-close-btn"
              onClick={() => setIsQaDrawerOpen(false)}
              aria-label="Tutup"
            >
              ✕
            </button>
          </div>

          {/* Questions Scrollable List */}
          <div className="teams-drawer-questions-list">
            {questions.map((q) => (
              <div key={q.id} className="teams-drawer-q-card">
                <div className="teams-drawer-q-meta">
                  <div className="teams-q-author-wrap">
                    <span
                      className="teams-q-avatar"
                      style={{ backgroundColor: q.avatarBg, color: q.avatarColor }}
                    >
                      {q.avatarText}
                    </span>
                    <span className="teams-q-author-name">{q.author}</span>
                  </div>
                  <span className="teams-q-time">{q.time}</span>
                </div>
                <p className="teams-q-content">{q.text}</p>
                <div className="teams-q-footer">
                  <button
                    type="button"
                    className={`btn-teams-upvote ${q.userUpvoted ? "active" : ""}`}
                    onClick={() => handleUpvote(q.id)}
                  >
                    <span className="upvote-icon">▲</span>
                    <span>{q.upvotes} Dukung</span>
                  </button>
                  <span className="teams-q-status">Menunggu dijawab</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Sticky Input Pertanyaan */}
          <form className="teams-drawer-input-row" onSubmit={handleSubmitQuestion}>
            <input
              type="text"
              className="teams-drawer-input"
              placeholder={`Tulis pertanyaan untuk ${speakerName}...`}
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
            />
            <button
              type="submit"
              className={`btn-teams-send ${newQuestionText.trim() ? "ready" : ""}`}
              disabled={!newQuestionText.trim()}
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
