import React, { useState, useEffect } from 'react';
import './darkMode.css';
function Button() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <a onClick={toggleTheme} style={{color:"white",backgroundColor:"rgb(233, 111, 16)"}}>Dark-Mode</a>
    </div>
  );
}
export default Button;
