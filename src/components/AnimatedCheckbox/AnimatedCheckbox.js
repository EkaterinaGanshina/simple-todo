import React from 'react';
import cbx from './AnimatedCheckbox.module.css';

export const AnimatedCheckbox = (props) => {
  return (
    <div className={cbx.container}>
      <input
        className={cbx.source}
        id={`check${props.itemId}`}
        type="checkbox"
        checked={props.checked}
        onChange={() => props.toggleItem(props.itemId)} />
      <label
        className={cbx.checkbox}
        htmlFor={`check${props.itemId}`}> </label>
    </div>
  )
}
