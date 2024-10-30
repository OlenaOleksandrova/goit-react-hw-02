// import React from "react";
import s from "./Options.module.css"

const updateFeedback = ({ feedbackType }) => (
  <div className={s.container}>
  <div className={s.listButton} >
    <button className={s.button} onClick={() => feedbackType('good')}>Good</button>
    <button className={s.button} onClick={() => feedbackType('neutral')}>Neutral</button>
    <button className={s.button}  onClick={() => feedbackType('bad')}>Bad</button>
    </div>
    </div>
);

export default updateFeedback;