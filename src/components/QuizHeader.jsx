import ProgressBar from './ProgressBar.jsx'

export default function QuizHeader({ current, total }) {
  return (
    <header className="quiz-header">
      <span className="quiz-count">
        Question {current} of {total}
      </span>
      <ProgressBar current={current} total={total} />
    </header>
  )
}