// import React from "react";
import { useState, useEffect} from "react"
import Feedback from "./assets/components/Feedback/Feedback";
import Options from "./assets/components/Options/Options";
import Notification from "./assets/components/Notification/Notification"



const App = () => {
 
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
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
  console.log(value)
  setFeedback(prev => ({
    ...prev,
    [value]: prev[value] + 1,
  }))
  }
  
  // скидання відгуків
   const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
   };
  
  // збереж.відгуків у localStorage
    useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  
  // обчислюв.значення % з дз
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercent = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

   return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

       {/* вибір відгуків(кнопки) */}
       <Options feedback={feedback}
                feedbackType={handleFeedback}
                resetFeedback={resetFeedback}
                totalFeedback={totalFeedback}
                />

      {totalFeedback > 0 ? (

        // відображення статистики
         <Feedback feedback={feedback}
           totalFeedback={totalFeedback}
         positivePercent={positivePercent}/>
      ) : (
        <Notification message="No feedback collected yet" />
      )}
    </div>
  );
};

export default App
 