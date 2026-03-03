import { useState } from 'react'
import ExpenseModule from "./components/expenses/ExpenseModule"
import TaskDashboard from "./components/tasks/TaskDashboard"
import FocusButton from "./components/focus/FocusButton" 
import './App.css'

function App() {
  const [isFocusMode, setIsFocusMode] = useState(false)

  const handleToggleFocus = () => {
    setIsFocusMode(!isFocusMode)
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>Daily Flow Dashboard</h1>
        <FocusButton isFocusMode={isFocusMode} onToggle={handleToggleFocus} />
      </div>
      <div className="modules">
        {!isFocusMode && <TaskDashboard />}
        {!isFocusMode && <ExpenseModule />}
      </div>
    </div>
  )
}

export default App
