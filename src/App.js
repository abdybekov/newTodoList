import React from 'react';
import './App.css';
import CreateTodo from './components/create-todo/CreateTodo.jsx';
import Header from './components/header/Header.jsx';
import Todo from './components/todo/Todo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        {id: 1, text: "Выполнить д-з", status: false},
        {id: 2, text: "Купить сахар", status: true},
        {id: 3, text: "Купить соль", status: false},
      ]
    }
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(str) {
    alert(str)
    this.setState({ todolist: [] });
  }

  render() {
    return (
      <div className="App">
        <div className='todo-wrapper'>
          <Header count={4} />
          <div className='p-3'>
            <CreateTodo createTodo={this.createTodo} />

            <div className='mt-2 todo-list'>
              {
                this.state.todolist.map((todo) => <Todo text={todo.text} status={todo.status} />)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <div className='todo-wrapper'>
//         <Header count={4} />
//         <div className='p-3'>
//           <CreateTodo />

//           <div className='mt-2 todo-list'>
//             {
//               [1, 2, 3].map((todo) => <Todo text={todo} />)
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
