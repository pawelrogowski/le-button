import { useState } from "react";
import "./App.css";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <div>
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
    </div>
  );
}

export default App;
