import React from "react";

//import styles from "./Register.module.css";
class StepList extends React.Component{
    componentDidUpdate() {
        console.log(this.props);
        if ( this.props.inputElementstep.current !== null ) { this.props.inputElementstep.current.focus() }

      }
      render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.props.addItemStep}>
                <input
                  placeholder="Task"
                  ref={this.props.inputElementStep}
                  value={this.props.currentItem2.text}
                  onChange={this.props.handleInputStep}
                />
                <button type="submit"> Add Task </button>
              </form>
            </div>
          </div>
        )
      }
}

export default StepList;