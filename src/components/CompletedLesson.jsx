import React, { useState } from "react";
import "./CompletedLesson.css";
import videoGainXP from "../assets/pages_assets/gain_xp/Video-Gain-XP.webm";

export default function CompletedLesson({
  onFinish,
  xpEarned = 25,
  title = "Pelajaran Selesai!",
  subtitle = "Kamu meraih",
}) {
  const [displayedXP, setDisplayedXP] = useState(0);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Trigger XP appearance and counting animation after video finishes playing
  const handleVideoEnded = () => {
    setIsVideoEnded(true);
    setIsCounting(true);

    let startTime = null;
    const duration = 1300; // 1.3s count-up duration

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * xpEarned);
      setDisplayedXP(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayedXP(xpEarned);
        setIsCounting(false); // Stop sparkles when counting ends

        // Show Tutup button exactly 1 second after XP finishes counting
        setTimeout(() => {
          setShowButton(true);
        }, 1000);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="lesson-completed-screen" data-node-id="281:919" data-name="Completed-Lesson">
      {/* Centered Celebration & XP Content */}
      <div className="lesson-completed-content" data-node-id="281:929">
        {/* Gain XP Video Animation */}
        <div className="lesson-completed-video-wrap" data-node-id="302:888">
          <video
            src={videoGainXP}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="lesson-completed-video"
            aria-label="Animasi Perolehan XP"
          />
        </div>

        {/* Title */}
        <h2 className="lesson-completed-title" data-node-id="302:930">
          {title}
        </h2>

        {/* XP Section - Only displayed after video ends */}
        {isVideoEnded && (
          <div className="lesson-completed-xp-block lesson-xp-appear" data-node-id="301:614">
            <p className="lesson-completed-xp-subtitle" data-node-id="281:930">
              {subtitle}
            </p>
            <div className="lesson-completed-xp-amount-wrapper">
              {/* Sparkling Stars around XP */}
              <div className={`lesson-sparkle-stars ${isCounting ? "active-sparkle" : "sparkle-stopped"}`}>
                <span className="sparkle-star star-1">✦</span>
                <span className="sparkle-star star-2">✨</span>
                <span className="sparkle-star star-3">✧</span>
                <span className="sparkle-star star-4">✦</span>
                <span className="sparkle-star star-5">✨</span>
                <span className="sparkle-star star-6">✧</span>
              </div>
              <p className="lesson-completed-xp-amount" data-node-id="281:931">
                +{displayedXP} XP
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Fixed bottom CTA Tutup Button - appears 1 second after XP finishes counting */}
      {showButton && (
        <div className="lesson-cta-wrapper lesson-cta-appear">
          <button
            type="button"
            className="btn-lesson-finish"
            onClick={onFinish}
            data-node-id="281:932"
          >
            Tutup
          </button>
        </div>
      )}
    </div>
  );
}
