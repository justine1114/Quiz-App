export default function HomePage({ onStart }) {
  return (
    <div className="page-shell">
      <div className="window-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <main className="home-main">
        <div className="home-content">
          <h1>Welcome to the Frontend Quiz!</h1>
          <p>
            Challenge your skills with our curated core questions on HTML, CSS,
            and JavaScript. Perfect for learning and review.
          </p>
          <button className="primary-button" type="button" onClick={onStart}>
            Start Quiz
          </button>
        </div>
      </main>
    </div>
  )
}