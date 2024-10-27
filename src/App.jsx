
import Feedback from "./assets/components/Feedback/Feedback";
import Options from "./assets/components/Options/Options";

const App = () => {
  const [Feedback, setFeedback] = userState(() => {
    const savedFeedback = window.localStorage.getItem("feedback")
  }
)
}



export default App
