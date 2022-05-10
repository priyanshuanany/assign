import './App.css';
import { Todos } from './components/Todos';
// import {Counter} from './components/Counter';
import {Routes, Route} from 'react-router-dom'
import {TodoItem} from './components/TodoItem'

function App() {
  return (
    <div className="App">
      <div>
      <Counter></Counter>
      </div>
      <Routes>
        <Route path="/" element={<Todos/>}></Route>
        <Route path="/todos/:id" element={<TodoItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;