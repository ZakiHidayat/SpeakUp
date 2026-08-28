import React, { useState } from "react";
import "./RegisterForm.css";

// Assets
import arrowRightIcon from "../assets/pages_assets/register/arrow_right.svg";
import eyeClosedIcon from "../assets/pages_assets/register/eye_closed.svg";

export default function RegisterForm({ onComplete, onLogin, onBackToAnalysis }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name.trim()) {
        setErrorMessage("Silakan isi nama kamu terlebih dahulu.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.email.trim() || !formData.email.includes("@")) {
        setErrorMessage("Silakan masukkan email yang valid.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!formData.password) {
        setErrorMessage("Silakan buat kata sandi.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Konfirmasi kata sandi tidak cocok.");
        return;
      }
      if (onComplete) {
        onComplete(formData);
      }
    }
  };

  const handleBack = () => {
    setErrorMessage("");
    if (step === 1) {
      if (onBackToAnalysis) onBackToAnalysis();
    } else {
      setStep((s) => s - 1);
    }
  };

  const displayName = formData.name.trim() || "Nadine Euvania";

  return (
    <div className="register-screen" data-node-id="239:569" data-name="Register">
      {/* ── TopBar with 3 Progress Segments ───────────────────── */}
      <header className="register-topbar" data-node-id="246:624">
        <div className="register-progress-bar" data-node-id="246:626">
          <div className={`register-progress-segment ${step >= 1 ? "filled" : ""}`} />
          <div className={`register-progress-segment ${step >= 2 ? "filled" : ""}`} />
          <div className={`register-progress-segment ${step >= 3 ? "filled" : ""}`} />
        </div>
      </header>

      {/* ── Form Section ──────────────────────────────────────── */}
      <main className="register-form-section" data-node-id="246:649">
        <div className="register-form-body">
          {/* STEP 1: Name */}
          {step === 1 && (
            <div className="register-step-content" data-node-id="246:672">
              <h1 className="register-step-title" data-node-id="246:651">
                Siapa Namamu?
              </h1>
              <div className="register-input-group">
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="register-input"
                  autoFocus
                  data-node-id="246:671"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Email */}
          {step === 2 && (
            <div className="register-step-content" data-node-id="246:694">
              <div className="register-step-title" data-node-id="246:695">
                <p>Apa email mu,</p>
                <p>{displayName}?</p>
              </div>
              <div className="register-input-group">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="register-input"
                  autoFocus
                  data-node-id="246:696"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Password */}
          {step === 3 && (
            <div className="register-step-content" data-node-id="246:727">
              <h1 className="register-step-title" data-node-id="246:728">
                Buat kata sandi
              </h1>
              <div className="register-input-group password-group">
                <div className="register-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Kata sandi"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="register-input"
                    autoFocus
                    data-node-id="246:729"
                  />
                  <button
                    type="button"
                    className="btn-toggle-eye"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle kata sandi"
                    data-node-id="246:740"
                  >
                    <img src={eyeClosedIcon} alt="" className={`eye-icon ${showPassword ? "active" : ""}`} />
                  </button>
                </div>

                <div className="register-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Konfirmasi kata sandi"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                    className="register-input"
                    data-node-id="246:747"
                  />
                  <button
                    type="button"
                    className="btn-toggle-eye"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle konfirmasi kata sandi"
                    data-node-id="246:748"
                  >
                    <img src={eyeClosedIcon} alt="" className={`eye-icon ${showConfirmPassword ? "active" : ""}`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Error notification if any */}
          {errorMessage && (
            <p className="register-error-text">{errorMessage}</p>
          )}
        </div>

        {/* ── Fixed Bottom Actions ────────────────────────────── */}
        <div className="register-actions-wrapper" data-node-id="246:676">
          <button
            type="button"
            className="btn-register-submit"
            onClick={handleNext}
            data-node-id="246:677"
          >
            {step === 3 ? "BUAT AKUN" : "Lanjut"}
          </button>

          {step === 1 ? (
            <button
              type="button"
              className="btn-has-account"
              onClick={onLogin}
              data-node-id="246:679"
            >
              Aku sudah memiliki akun
            </button>
          ) : (
            <button
              type="button"
              className="btn-register-back"
              onClick={handleBack}
              data-node-id="246:709"
            >
              <img src={arrowRightIcon} alt="" className="back-arrow-icon" />
              <span>Kembali</span>
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
