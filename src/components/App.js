import { useState } from "react";
import React from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
