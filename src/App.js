import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';

const tasks = [
  { name: 'Learn React', done: false },
  { name: 'Learn CSS', done: true },
  { name: 'Web development', done: true }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: tasks, value: '' };

    this.clickHandler = this.clickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  clickHandler() {
    console.log('Yay');

    this.setState(prevState => {
      const newState = { ...prevState };
      return newState.tasks.push({ name: this.state.value, done: 'false' });
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
          return <TodoItem key={task.name} done={task.done} name={task.name} />;
        })}
        <form onSubmit={this.clickHandler}>
          <input type="text" id="name" name="name" onChange={this.onChangeHandler} value={this.state.value} />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default App;
