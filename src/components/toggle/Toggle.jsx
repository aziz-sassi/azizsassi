import "./toggle.css";
import React from "react";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext);
  const handleClick = (e) => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={sun} alt="" className="t-icon" />
      <img src={moon} alt="" className="t-icon" />
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode? 0 : 25}}></div>
    </div>
  );
}

export default Toggle;
