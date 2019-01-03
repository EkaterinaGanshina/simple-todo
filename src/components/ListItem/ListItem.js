import React from 'react';
import { AnimatedCheckbox } from '../AnimatedCheckbox/AnimatedCheckbox';
import styles from './ListItem.module.css';

export const ListItem = (props) => {
  const todo = props.todo;

  return (
    <li className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <AnimatedCheckbox
        itemId={todo.id}
        checked={todo.completed}
        toggleItem={props.toggleItem} />
      <span className={styles.todoText}>{todo.text}</span>
      <button className={`btn btn-light btn-sm ${styles.btnDelete}`}
              onClick={() => props.deleteItem(todo.id)}>Delete</button>
    </li>
  )
}