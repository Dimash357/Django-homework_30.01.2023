import './App.css';
import Header from './components/Header/Header';
import TodoCreate from './components/TodoCreate/TodoCreate';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todo, setTodo] = useState([

  ])

  return (
    <div className="App">
      <Header />
      <TodoCreate todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
