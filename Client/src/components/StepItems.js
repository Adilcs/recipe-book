import React, { Component } from 'react'
import styles from './List.module.css'
class StepItems extends Component {
  createTasks=(item)=> {
    return <li key={item.key}>{item.text}<button className ={styles.del} onClick={this.props.deleteStepItem.bind(null, item.key)} type="button">Delete</button></li>
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ol className="theList">{listItems}</ol>
  }
}
export default StepItems