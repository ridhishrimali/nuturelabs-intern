import React from "react";
import "../css/Experts.css";
import ExpertInfo from "./ExpertInfo";

function Experts() {
  return (
    <div>
      <div className="experts__heading">
        <h3>Experts</h3>
        <select>
          <option>Best Match</option>
        </select>
      </div>
      <div className="experts__container">
        <ExpertInfo />
        <ExpertInfo />
        <ExpertInfo />
        <ExpertInfo />
        <ExpertInfo />
      </div>
    </div>
  );
}

export default Experts;
