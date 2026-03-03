import { useState, useEffect } from 'react'
import type { Expense } from '../../types/index'
import ExpenseInput from './ExpenseInput'
import ExpenseSummary from './ExpenseSummary'
import ExpenseHistory from './ExpenseHistory'
import AddCategoryModal from './addCategoryModal'

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

  const [isOpen, setIfIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIfIsOpen(!isOpen)
  }

  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  const handleCategoryIsOpen = () => {
    setIsCategoryOpen(!isCategoryOpen)
  }

  return (
    <div className="card">
      <h2>Wydatki</h2>
      <ExpenseInput
        categories={categories}
        onAddExpense={handleAddExpense}
      />

      <ExpenseSummary
        expenses={expenses}
      />

      <div className="modal-buttons">
        <button className="modal-btn" onClick={handleCategoryIsOpen}>Dodaj kategorię wydatków</button>
        <AddCategoryModal
          onAddCategory={handleAddCategory}
          isOpen={isCategoryOpen}
          onClose={handleCategoryIsOpen}
        />

        <button className="modal-btn" onClick={handleIsOpen}>Historia Wydatków</button>
        <ExpenseHistory 
          expenses={expenses}
          isOpen={isOpen}
          onClose={handleIsOpen}
        />
      </div>
    </div>
  )
}

export default ExpenseModule
