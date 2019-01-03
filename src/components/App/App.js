import React, { Component } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import List from '../List/List';
import Data from '../../data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: Data,
      lastId: Data.length,
      currentItem: {
        id: null,
        text: '',
        completed: false
      }
    }
  }

  // mark to-do as completed
  toggleTodo = (id) => {
    const todos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }

      return item
    })

    this.setState({
      todos
    })
  }

  // add new item to the to-do list
  addTodo = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== '') {
      newItem.id = this.state.lastId + 1;

      const items = [...this.state.todos, newItem];

      this.setState({
        // save all items together
        todos: items,

        // clear object for new item
        currentItem: {
          id: null,
          text: '',
          completed: false
        },

        // save new lastId
        lastId: newItem.id
      })
    }
  }

  // save text of the new item to the state while user is typing
  handleInput = (e) => {
    const itemText = e.target.value;
    const currentItem = {
      id: null,
      text: itemText,
      completed: false
    };

    this.setState({
      currentItem
    })
  }

  // when user clicks on "Delete" button
  deleteItem = (id) => {
    const filteredItems = this.state.todos.filter((item) => item.id !== id)

    this.setState({
      todos: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col col-lg-10">
              <h1>Simple To-Do List</h1>

              <AddTodo
                currentItem={this.state.currentItem}
                addItem={this.addTodo}
                onInput={this.handleInput} />
              <List
                todos={this.state.todos}
                toggleItem={this.toggleTodo}
                deleteItem={this.deleteItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
