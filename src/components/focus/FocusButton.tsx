interface FocusButtonProps {
  isFocusMode: boolean
  onToggle: () => void
}

function FocusButton({ isFocusMode, onToggle }: FocusButtonProps) {
  return (
    <button
      className={isFocusMode ? 'focus-button focus-button--active' : 'focus-button'}
      onClick={onToggle}
    >
      {isFocusMode ? '✕ Wyłącz skupienie' : '⏱ Tryb skupienia'}
    </button>
  )
}

export default FocusButton
