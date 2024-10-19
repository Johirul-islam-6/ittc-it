import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const DarkLight = () => {
  // Initialize darkMode state with the value from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // Apply the theme to the document and update localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className="border-[2px] border-[#0000003a] dark:border-[#ffffff46] rounded-full border-dotted h-[35px] w-[35px] flex justify-center items-center p-1">
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={20} />
    </div>
  );
};
