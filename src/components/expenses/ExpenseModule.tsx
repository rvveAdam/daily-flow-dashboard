import { useState, useEffect } from 'react'
import type { Expense } from '../../types/index'
import ExpenseInput from './ExpenseInput'
import ExpenseSummary from './ExpenseSummary'

function ExpenseModule() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved) : []
  })

  const [categories, setCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('categories')
    return saved ? JSON.parse(saved) : ['Zakupy', 'Transport', 'Zdrowie', 'Inne']
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  const handleAddExpense = (expense: Expense) => {
    setExpenses([...expenses, expense])
  }

  const handleAddCategory = (name: string) => {

    if (name.trim() === ''){
        return
    }

    if(categories.includes(name)){
        return
    }

    setCategories([...categories, name])
  }

  return (
    <div>
      <h2>Wydatki</h2>
      <ExpenseInput
        categories={categories}
        onAddExpense={handleAddExpense}
        onAddCategory={handleAddCategory}
      />
      <ExpenseSummary
        expenses={expenses}
      />
    </div>
  )
}

export default ExpenseModule
