import React from 'react';
import { ListItem } from '../ListItem/ListItem';
import styles from './List.module.css';

export default class List extends React.Component {
  createTodo = (item) => {
    return (
      <ListItem
        key={item.id}
        todo={item}
        toggleItem={this.props.toggleItem}
        deleteItem={this.props.deleteItem} />
    )
  }

  render() {
    const items = this.props.todos.map((item) => this.createTodo(item));

    return <ul className={styles.todoList}>{items}</ul>
  }
}
