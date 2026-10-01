import { questions } from '../data/questions.js'
import AnswerOption from './AnswerOption.jsx'
import QuizHeader from './QuizHeader.jsx'

export default function QuestionCard({
  currentQuestion,
  selectedAnswer,
  onSelectAnswer,
}) {
  const question = questions[currentQuestion]

  return (
    <section className="question-card" aria-labelledby="question-title">
      <QuizHeader current={currentQuestion + 1} total={questions.length} />
      <h1 className="question-title" id="question-title">
        {question.question}
      </h1>
      <div className="answer-grid">
        {question.choices.map((choice) => (
          <AnswerOption
            key={choice}
            choice={choice}
            selected={selectedAnswer === choice}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </section>
  )
}