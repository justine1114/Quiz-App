import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { questions } from './data/questions.js'
import HomePage from './pages/HomePage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ResultPage from './pages/ResultPage.jsx'
import './App.css'

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null))
  const navigate = useNavigate()
  const score = answers.reduce(
    (total, answer, index) => total + (answer === questions[index].correctAnswer ? 1 : 0),
    0,
  )
  function startQuiz() {
    setCurrentQuestion(0)
    setAnswers(Array(questions.length).fill(null))
    navigate('/quiz')
  }

  function selectAnswer(answer) {
    setAnswers((currentAnswers) =>
      currentAnswers.map((current, index) => (index === currentQuestion ? answer : current)),
    )
  }

  function goToNextQuestion() {
    if (answers[currentQuestion] === null) return

    if (currentQuestion === questions.length - 1) {
      navigate('/result')
      return
    }

    setCurrentQuestion((current) => current + 1)
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage onStart={startQuiz} />} />
      <Route
        path="/quiz"
        element={
          <QuizPage
            currentQuestion={currentQuestion}
            selectedAnswer={answers[currentQuestion]}
            onSelectAnswer={selectAnswer}
            onNext={goToNextQuestion}
          />
        }
      />
      <Route
        path="/result"
        element={<ResultPage score={score} onRetake={startQuiz} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <QuizApp />
    </BrowserRouter>
  )
}

export default App
