import { useState } from 'react'
import type { Expense, ExpenseCategory } from '../../types/index'

interface ExpenseInputProps {
  onAddExpense: (expense: Expense) => void
  categories: string[]
}

function ExpenseInput({ onAddExpense, categories}: ExpenseInputProps) {
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState<ExpenseCategory>('Inne')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (amount === null || Number(amount) <= 0 ){
        return 
    }

    const expense = {
        id: Date.now().toString(),
        amount: Number(amount),
        category: category,
        description: description,
        date: new Date().toISOString()
    }

    onAddExpense(expense)
    setAmount('')
    setDescription('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
        <label>
          Kwota (PLN)
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" min="0" />
        </label>

        <label>
          Kategoria
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
              ))}
          </select>
        </label>

        <label>
          Opis
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Na co?" />
        </label>

        <button type="submit">Dodaj wydatek</button>
    </form>
  )
}

export default ExpenseInput
