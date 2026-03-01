import ExpenseModule from "./components/expenses/ExpenseModule";
import TaskDashboard from "./components/tasks/TaskDashboard";

function App() {
  return (
    <div>
      {/* dodany H1 */}
      <h1>Daily Flow Dashboard</h1>
      {/* dodany p */}
      <p>Witaj w aplikacji</p>
      <TaskDashboard></TaskDashboard>
      <ExpenseModule></ExpenseModule>
    </div>
  );
}

/* dodany export default */
export default App;
