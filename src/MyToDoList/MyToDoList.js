import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class MyToDoList extends Component {
  state = {
    todos: [
      {id: 1, content: 'find a cake recipe for my mother birthday'},
      {id: 2, content: 'buy ingredients to make cupcakes in weekend :)'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    const mystyle = {

        color: "#b31d64",        
        fontSize: "40px",
        padding: "10px",
        fontFamily: "Fantacy",
        textAlign: "center",
        fontStyle: "oblique",
    };

    return (
      <div className="todo-app container">
        <h1 style = {mystyle}>My To Do List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default MyToDoList;