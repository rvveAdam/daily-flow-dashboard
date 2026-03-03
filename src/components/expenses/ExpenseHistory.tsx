import { useState } from 'react'
import type { Expense } from '../../types/index'

interface ExpenseHistoryProps {
  expenses: Expense[]
  isOpen: boolean
  onClose: () => void
}

function ExpenseHistory({ expenses, isOpen, onClose }: ExpenseHistoryProps) {

  const [selectedDate, setSelectedDate] = useState(new Date())

  const [isClosing, setIsClosing] = useState(false)

  if (!isOpen) return null

  const wydatkiDnia = expenses
    .filter((expense) => new Date(expense.date).toDateString() === selectedDate.toDateString())

  const suma = wydatkiDnia.reduce((acc, expense) => acc + expense.amount, 0)

  // Poprzedni dzień
  const handlePrevDay = () => {
    const data = new Date(selectedDate)
    data.setDate(data.getDate() - 1)
    setSelectedDate(data)
  }

  // Następny dzień
  const handleNextDay = () => {
    const data = new Date(selectedDate)
    data.setDate(data.getDate() + 1)
    setSelectedDate(data)
  }

  const handleClose = () => {
    setIsClosing(true)
  }


  return (
    <div 
        className={isClosing ? 'modal-overlay modal-overlay--closing' : 'modal-overlay'} 
        onClick={handleClose} 
        onAnimationEnd={() => { 
            if (isClosing) { 
                setIsClosing(false)
                onClose()
            }
        }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <button type="button" onClick={handlePrevDay}>←</button>
          <span>{selectedDate.toLocaleDateString('pl-PL')}</span>
          <button type="button" onClick={handleNextDay}>→</button>
          <button type="button" onClick={handleClose}>✕</button>
        </div>

        <div className="modal-list">
          {wydatkiDnia.map((expense) => (
            <div key={expense.id}>
                <span className="modal-list__amount">Cena: {expense.amount}</span>
                <span className="modal-list__description">Opis: {expense.description}</span>
                <span className="modal-list__category">Kategoria: {expense.category}</span>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          Suma: {suma} PLN
        </div>
      </div>
    </div>
  )
}

export default ExpenseHistory
