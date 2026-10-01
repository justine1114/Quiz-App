import { useNavigate } from 'react-router-dom'
import ResultCard from '../components/ResultCard.jsx'

export default function ResultPage({ score, onRetake }) {
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <div className="window-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <main className="result-main">
        <ResultCard
          score={score}
          onRetake={onRetake}
          onHome={() => navigate('/')}
        />
      </main>
    </div>
  )
}