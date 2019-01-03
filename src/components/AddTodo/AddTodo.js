import React from 'react';

export default class AddTodo extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addItem} className="form-row">
        <div className="input-group">
          <input
            value={this.props.currentItem.text}
            onChange={this.props.onInput}
            type="text"
            className="form-control"
            placeholder="What should be done?"
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-success"
              type="submit"
            >
              Add task
            </button>
          </div>
        </div>
      </form>
    )
  }
}