// import React from "react";
import s from "./Options.module.css"


const updateFeedback = ({ feedback, feedbackType, resetFeedback, totalFeedback}) => (
  <div className={s.container}>
  <div className={s.listButton} >
    {/* <button className={s.button} onClick={() => feedbackType('good')}>Good</button>
    <button className={s.button} onClick={() => feedbackType('neutral')}>Neutral</button>
    <button className={s.button}  onClick={() => feedbackType('bad')}>Bad</button> */}
      {Object.keys(feedback).map(option => (
        <button className={s.button}
          key={option}
          onClick={() => feedbackType(option)}>{option}</button>
      ))
      }
    </div>

    {totalFeedback > 0 && (
      <button className={s.button} onClick={resetFeedback}>
        Reset
      </button>
    )}
    </div>
);

export default updateFeedback;