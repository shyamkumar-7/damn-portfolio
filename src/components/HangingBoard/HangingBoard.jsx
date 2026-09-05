import React from "react";
import "./HangingBoard.css";

const HangingBoard = ({ onResumeClick }) => {
  return (
    <div className="hanging-board">
      <div className="hanging-string">
        <span className="string-knot" />
      </div>

      <button
        type="button"
        className="wood-board"
        onClick={onResumeClick}
      >
        <div className="board-attachment" />

        <div className="wood-crack crack-one" />
        <div className="wood-crack crack-two" />
        <div className="wood-crack crack-three" />

        <strong className="text-amber-200">
          Resume
        </strong>
      </button>
    </div>
  );
};

export default HangingBoard;