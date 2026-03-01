import { useState } from 'react'
import type { Expense, ExpenseCategory } from '../../types/index'

interface ExpenseInputProps {
  onAddExpense: (expense: Expense) => void
  categories: string[]
  onAddCategory: (name: ExpenseCategory) => void 
}

function ExpenseInput({ onAddExpense, categories, onAddCategory }: ExpenseInputProps) {
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
    const [newCategory, setNewCategory] = useState('')

        const handleAddCategory = () => {
        onAddCategory(newCategory)
        setNewCategory('')
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button type="submit">Dodaj kolejny wydatek</button>

        <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="button" onClick={handleAddCategory}>
        Dodaj kategorię
        </button>

    </form>
  )
}

export default ExpenseInput
