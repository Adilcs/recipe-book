import React from "react";
import IngredientsList from "./IngredientsList"
import styles from "./Register.module.css";
import IngredientItems from "./IngredientItems"
import StepList from "./StepList"
import StepItems from "./StepItems"
class AddRecipe extends React.Component{
    inputElement = React.createRef()
    inputElementstep = React.createRef()
    constructor() {
        super()
        this.state = {
          items: [],
          items2: [],
          currentItem: {text:'', key:''},
          currentItem2: {text:'', key:''},
        }
      }
      handleInput = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
          currentItem,
        })
      }
      addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
        
            currentItem: { text: '', key: '' },
          })
        }
      }
      handleInputStep = e => {
        const itemText2 = e.target.value
        const currentItem2 = { text: itemText2, key: Date.now() }
        this.setState({
          currentItem2,
        })
      }
      addItemStep = e => {
        e.preventDefault()
        const newItem = this.state.currentItem2
        if (newItem.text !== '') {
          console.log(newItem)
          const items2 = [...this.state.items2, newItem]
          this.setState({
            items2: items2,
            currentItem2: { text: '', key: '' },
          })
        }
      }
      
    render() {
  return (
      <div className={styles.box}><br></br>
          <h1>Create a Recipe</h1><br></br>

        <input className = {styles.input} name = "Title" type="text" placeholder="Title"></input><br></br>
        <input className = {styles.input} name = "description"type="text" placeholder="Description"></input><br></br>
        <p>upload image</p>
        <input type="file" id="input" />
        <p>Ingredients: </p>
        <IngredientsList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <IngredientItems entries = {this.state.items} />

        <p>Steps</p>
        <StepList
          addItemStep={this.addItemStep}
          inputElementstep={this.inputElementstep}
          handleInputStep={this.handleInputStep}
          currentItem2={this.state.currentItem2}
        />
        <StepItems entries = {this.state.items2} />


        <button><h3>add post</h3></button>

 
    </div>
  )
  }
}

export default AddRecipe;
