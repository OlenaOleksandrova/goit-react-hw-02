// import React from "react";
import s from "./Feedback.module.css"

const Feedback = ({ feedback }) => (
  <div className={s.container}>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
  </div>
);

export default Feedback;