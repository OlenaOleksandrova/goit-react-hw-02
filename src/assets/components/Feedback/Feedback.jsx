const Feedback = ({ good, neutral, bad, }) => {
    <div>
        <h2>Feedback Summary</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
    </div>
};

export default Feedback;