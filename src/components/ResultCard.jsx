import { questions } from '../data/questions.js'

export default function ResultCard({ score, onRetake, onHome }) {
  const incorrect = questions.length - score
  const percentage = Math.round((score / questions.length) * 100)

  return (
    <section className="result-card" aria-labelledby="result-title">
      <h1 id="result-title">Quiz Completed</h1>
      <p className="result-score" aria-label={`${score} out of ${questions.length}`}>
        {score} / {questions.length}
      </p>
      <div className="result-stats">
        <p>Total Questions: {questions.length}</p>
        <p>Correct Answers: {score}</p>
        <p>Incorrect Answers: {incorrect}</p>
        <p>Percentage: {percentage}%</p>
      </div>
      <div className="result-actions">
        <button className="primary-button" type="button" onClick={onRetake}>
          Retake Quiz
        </button>
        <button className="primary-button" type="button" onClick={onHome}>
          Return Home
        </button>
      </div>
    </section>
  )
}