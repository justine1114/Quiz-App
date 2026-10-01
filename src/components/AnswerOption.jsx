export default function AnswerOption({ choice, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`answer-option${selected ? ' answer-option--selected' : ''}`}
      aria-pressed={selected}
      onClick={() => onSelect(choice)}
    >
      {choice}
    </button>
  )
}