import Tasks from "./Tasks";
import "../styles/App.css"
import listTask from "../services/tasks.json"

function App() {
  const names = ['Zorahida', 'Soraya', 'Jose', 'francisco', 'Ivan'];

  const htmlNames = names.map((name, i) => (
    <li key={i} id={i}>
      {name}
    </li>
  ));
  return (
    <div>
      <ul>{htmlNames}</ul>
      <Tasks listTask={listTask} />
    </div>
  );
}

export default App;
