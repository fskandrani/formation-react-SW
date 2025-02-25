import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';

const tasks = [
  { id: 0, name: 'Learn React', done: false },
  { id: 1, name: 'Learn CSS', done: true },
  { id: 2, name: 'Web development', done: true }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: tasks, value: '' };

    this.clickHandler = this.clickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.changeCheckedHandler = this.changeCheckedHandler.bind(this);
  }

  clickHandler() {
    console.log('Yay');

    this.setState(prevState => {
      const newState = { ...prevState };
      return newState.tasks.push({ id: newState.tasks.length, name: this.state.value, done: false });
    });
  }

  changeCheckedHandler(id) {
    console.log('id : ', id);
    console.log('this.state ', this.state);
    this.setState(prevState => {
      const newState = { ...prevState };
      return (newState.tasks[id].done = !this.state.tasks[id].done);
    });
  }

  onChangeHandler(event) {
    const value = event.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.value = value;
      return newState;
    });
  }

  render() {
    return (
      <div>
        {tasks.map(task => {
          return (
            <TodoItem
              key={task.name}
              id={task.id}
              done={task.done}
              name={task.name}
              changeCheckedHandler={this.changeCheckedHandler}
            />
          );
        })}
        <button onClick={this.clickHandler}> Add</button>
        <input type="text" id="name" name="name" onChange={this.onChangeHandler} value={this.state.value} />
      </div>
    );
  }
}

export default App;
