interface FocusButtonProps {
  isFocusMode: boolean
  onToggle: () => void
}

function FocusButton({ isFocusMode, onToggle }: FocusButtonProps) {
  return (
    <button onClick={onToggle}>
      {isFocusMode ? 'Wyłącz skupienie' : 'Tryb skupienia'}
    </button>
  )
}

export default FocusButton
