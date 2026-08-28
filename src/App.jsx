import React, { useState } from "react";
import PhoneFrame from "./components/PhoneFrame";
import Onboarding from "./components/Onboarding";
import PositiveAffirmation from "./components/PositiveAffirmation";
import Questionnaires from "./components/Questionnaires";
import AIAnalysis from "./components/AIAnalysis";
import RegisterForm from "./components/RegisterForm";
import WelcomingScreen from "./components/WelcomingScreen";
import HomeScreen from "./components/HomeScreen";
import PracticeZone from "./components/PracticeZone";
import LiveRoomScreen from "./components/LiveRoomScreen";
import ModuleDetailScreen from "./components/ModuleDetailScreen";
import LessonScreen from "./components/LessonScreen";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("onboarding");
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedLiveRoom, setSelectedLiveRoom] = useState(null);
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
  });

  const handleStartRegistration = () => {
    // 1-time transition from onboarding to positive affirmation before questionnaires
    setCurrentScreen("affirmation");
  };

  const handleAffirmationComplete = () => {
    // After affirmation, proceed to questionnaires for registration
    setCurrentScreen("questionnaires");
  };

  const handleBackToOnboarding = () => {
    setCurrentScreen("onboarding");
  };

  const handleQuestionnaireFinish = (_answers) => {
    // Questionnaire directly proceeds to Register Form
    setCurrentScreen("register");
  };

  const handleRegisterComplete = (data) => {
    setUserProfile({
      name: data.name,
      email: data.email,
    });
    // After completing registration, show welcoming screen
    setCurrentScreen("welcoming");
  };

  const [practiceMode, setPracticeMode] = useState("solo");

  const handleStartApp = () => {
    setCurrentScreen("home");
  };

  const handleSelectModule = (mod) => {
    setSelectedModule(mod);
    setCurrentScreen("module-detail");
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
  };

  const handleStartLesson = (lessonNum, moduleData) => {
    setSelectedLesson({ lessonNum, moduleData });
    setCurrentScreen("lesson");
  };

  const handleBackToModuleDetail = () => {
    setCurrentScreen("module-detail");
  };

  const handleLessonFinish = () => {
    setCurrentScreen("module-detail");
  };

  const handleJoinLiveRoom = (room) => {
    setSelectedLiveRoom(room);
    setCurrentScreen("live-room");
  };

  const handleLeaveLiveRoom = () => {
    setPracticeMode("live");
    setCurrentScreen("practice");
  };

  const handleNavigatePractice = () => {
    setPracticeMode("solo");
    setCurrentScreen("practice");
  };

  const handleNavigateGroup = () => {
    setPracticeMode("live");
    setCurrentScreen("practice");
  };

  return (
    <PhoneFrame>
      {currentScreen === "onboarding" && (
        <Onboarding
          onStart={handleStartRegistration}
          onLogin={() => alert("Menuju halaman Login")}
        />
      )}

      {currentScreen === "affirmation" && (
        <PositiveAffirmation onContinue={handleAffirmationComplete} />
      )}

      {currentScreen === "questionnaires" && (
        <Questionnaires
          onBackToOnboarding={handleBackToOnboarding}
          onFinish={handleQuestionnaireFinish}
        />
      )}

      {currentScreen === "register" && (
        <RegisterForm
          onComplete={handleRegisterComplete}
          onLogin={() => alert("Menuju halaman Login")}
          onBackToAnalysis={() => setCurrentScreen("questionnaires")}
        />
      )}

      {currentScreen === "welcoming" && (
        <WelcomingScreen
          userName={userProfile.name}
          onStartApp={handleStartApp}
        />
      )}

      {currentScreen === "home" && (
        <HomeScreen
          userName={userProfile.name}
          onSelectModule={handleSelectModule}
          onNavigatePractice={handleNavigatePractice}
          onNavigateGroup={handleNavigateGroup}
          onNavigateProfile={() => alert("Halaman Profil Segera Hadir!")}
        />
      )}

      {currentScreen === "practice" && (
        <PracticeZone
          key={practiceMode}
          initialMode={practiceMode}
          onNavigateHome={() => setCurrentScreen("home")}
          onNavigateProfile={() => alert("Halaman Profil Segera Hadir!")}
          onJoinLiveRoom={handleJoinLiveRoom}
        />
      )}

      {currentScreen === "live-room" && (
        <LiveRoomScreen
          roomData={selectedLiveRoom}
          onLeaveRoom={handleLeaveLiveRoom}
        />
      )}

      {currentScreen === "module-detail" && (
        <ModuleDetailScreen
          moduleData={selectedModule}
          onBack={handleBackToHome}
          onStartLesson={(num) => handleStartLesson(num, selectedModule)}
          onOpenNextModule={(nextNum) => alert(`Membuka Modul ${nextNum}`)}
        />
      )}

      {currentScreen === "lesson" && (
        <LessonScreen
          lessonData={selectedLesson}
          onBack={handleBackToModuleDetail}
          onFinish={handleLessonFinish}
        />
      )}
    </PhoneFrame>
  );
}

export default App;

