import type { Expense } from '../../types/index'

interface ExpenseSummaryProps {
  expenses: Expense[]
}

function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
  const dzisiaj = new Date().toDateString()

  const wydaneDzisiaj = expenses
    .filter((expense) => new Date(expense.date).toDateString() === dzisiaj)
    .reduce((acc, expense) => acc + expense.amount, 0)

  const wydaneMiesiac = expenses
    .filter((expense) => {
      const data = new Date(expense.date)
      const teraz = new Date()
      return data.getMonth() === teraz.getMonth() &&
             data.getFullYear() === teraz.getFullYear()
    })
    .reduce((acc, expense) => acc + expense.amount, 0)

  return (
    <div>
        <p>Wydano dziś: {wydaneDzisiaj} PLN</p>
        <p>Wydatek w tym miesiącu: {wydaneMiesiac}</p>
    </div>
  )
}

export default ExpenseSummary
