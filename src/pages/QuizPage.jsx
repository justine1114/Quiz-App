import QuestionCard from '../components/QuestionCard.jsx'
import { questions } from '../data/questions.js'

export default function QuizPage({
  currentQuestion,
  selectedAnswer,
  onSelectAnswer,
  onNext,
}) {
  const isLastQuestion = currentQuestion === questions.length - 1

  return (
    <main className="quiz-page">
      <QuestionCard
        currentQuestion={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={onSelectAnswer}
      />
      <button
        className="primary-button quiz-next"
        type="button"
        disabled={selectedAnswer === null}
        onClick={onNext}
      >
        {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
      </button>
    </main>
  )
}