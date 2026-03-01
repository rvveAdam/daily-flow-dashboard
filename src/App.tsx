import { useState } from 'react'
import ExpenseModule from "./components/expenses/ExpenseModule"
import TaskDashboard from "./components/tasks/TaskDashboard"
import FocusButton from "./components/focus/FocusButton" 

function App() {
  const [isFocusMode, setIsFocusMode] = useState(false)

  const handleToggleFocus = () => {
    setIsFocusMode(!isFocusMode)
  }

  return (
    <div>
      <h1>Daily Flow Dashboard</h1>
      <FocusButton isFocusMode={isFocusMode} onToggle={handleToggleFocus} />
      {!isFocusMode && <TaskDashboard />}
      {!isFocusMode && <ExpenseModule />}
    </div>
  )
}

export default App
