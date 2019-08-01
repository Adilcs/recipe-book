import React from "react";

import styles from "./StepList.module.css";
class StepList extends React.Component {
  /*   componentDidUpdate() {
         console.log(this.props);
         if ( this.props.inputElementstep.current !== null ) { this.props.inputElementstep.current.focus() }
 
       }*/
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <input className={styles.field}
            placeholder="Step"
            ref={this.props.inputElementStep}
            value={this.props.currentItem2.text}
            onChange={this.props.handleInputStep}
          />
          <br />
          <button onClick={this.props.addItemStep} type="button"> Add Step </button>
        </div>
      </div>
    )
  }
}

export default StepList;