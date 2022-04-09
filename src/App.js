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
        { id: 1, text: "Выполнить д-з", status: false },
        { id: 2, text: "Купить сахар", status: true },
        { id: 3, text: "Купить соль", status: false },
      ]

      // isLoading: true,

    }
    this.createTodo = this.createTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this)
  }

  createTodo(str) {
    this.setState({
      todolist: [...this.state.todolist, {
        id: Math.random(),
        text: str,
        status: false
      }]
    });

    // setTimeout(() => {
    //   this.setState({ isLoading: false})
    // }, 2500)

  };

  changeStatus(id) {
    const newArr = this.state.todolist.map((item) => {
      if (item.id === id) {
        const newObj = { ...item, status: !item.status }
        return newObj
      }
      return item
    });
    this.setState({ todolist: newArr });
  }

  onDelete(id) {
    const newArr = this.state.todolist.filter((todo) => todo.id !== id);
    this.setState({ todolist: newArr })
  }


  onEdit(id, newText) {
    const newArr = this.state.todolist.map((item) => {
      if (item.id === id) {
        const newObj = { ...item, text: newText }
        return newObj
      }
      return item
    });
    this.setState({ todolist: newArr });
  }


  render() {

    // if (this.state.isLoading) {
    //   return <div className='text-center mt-5'>
    //     <img
    //       width={"150px"}
    //       src='https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif'
    //       alt="Preloader"
    //     />
    //   </div>
    // }

    return (
      <div className="App">
        <div className='todo-wrapper'>
          <Header count={this.state.todolist.length} done={this.state.todolist.filter((todo) => todo.status).length} />
          <div className='p-3'>
            <CreateTodo createTodo={this.createTodo} />
            <div className='mt-2 todo-list'>
              {
                this.state.todolist.map((todo) => <Todo
                  key={todo.id}
                  onEdit={this.onEdit}
                  onDelete={this.onDelete}
                  changeStatus={this.changeStatus}
                  id={todo.id}
                  text={todo.text}
                  status={todo.status}
                />)
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
