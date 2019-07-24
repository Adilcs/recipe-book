import React from "react";

import styles from "./IngredientsList.module.css";
class IngredientsList extends React.Component{
   /* componentDidUpdate() {
        if ( this.props.inputElement.current !== null ) { this.props.inputElement.current.focus() }
    }*/
      render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form >
                <input className={styles.field}
                  placeholder="Ingredient"
                  ref={this.props.inputElement}
                  value={this.props.currentItem.text}
                  onChange={this.props.handleInput}
                />
                <br/>
                <button  className ={styles.button} onClick={this.props.addItem} type="button"> Add Ingredient </button>
              </form>
            </div>
          </div>
        )
      }
}

export default IngredientsList;