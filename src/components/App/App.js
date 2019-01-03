import React, { Component } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import List from '../List/List';
import { Footer } from '../Footer/Footer';
import Data from '../../data.json';
import './App.css';

const APP_NAME = 'ReactSimpleTodo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: localStorage.getItem(APP_NAME) ? JSON.parse(localStorage.getItem(APP_NAME)) : Data,
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
    }, this.updateLocalStorage)
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
      }, this.updateLocalStorage)
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
    }, this.updateLocalStorage)
  }

  updateLocalStorage() {
    localStorage.setItem(APP_NAME, JSON.stringify(this.state.todos))
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

        <Footer />
      </div>
    );
  }
}

export default App;
