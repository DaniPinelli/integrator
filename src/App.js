import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';


function App() {
  return (

    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />

      <TaskListComponent />
    </div>







  );
}

export default App;
