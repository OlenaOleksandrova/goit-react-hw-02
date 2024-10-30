// import React from "react";
import { useState } from "react"
import Feedback from "./assets/components/Feedback/Feedback";
import Options from "./assets/components/Options/Options";



const App = () => {
 
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });


  // const handleFeedback = value => {
  //   console.log(value);
  //   if (value === "good") {
  //     setFeedback(prev => ({...prev, good: prev.good +1}))
  //   }
  //   if (value === "neutral") {
  //     setFeedback(prev => ({...prev, neutral: prev.neutral +1}))
  //   }
  //   if (value === "bad") {
  //     setFeedback(prev => ({ ...prev, bad: prev.bad+ 1 })
  //     )
  //   };


  const handleFeedback  = value => {
  
  setFeedback(prev => ({
    ...prev,
    [value]: prev[value] + 1,
  }))
 }
  return (
    <div >
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      
      {/*  вибір відгуків(кнопки) */}
      <Options feedbackType={handleFeedback} />

      {/* відображення статистики */}
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App
