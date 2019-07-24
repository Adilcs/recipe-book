import React, { Component } from 'react'
import styles from "./List.module.css"
class IngredientItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ul className={styles.theList}>{listItems}</ul>
  }
}
export default IngredientItems