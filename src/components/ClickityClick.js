// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
   constructor() {
      super()

      // define the initial state
      this.state = {
         hasBeenClicked: false
      }
   }

   handleClick = () => {
      // update our state here!
      this.setState(previousState => {
         return {
            hasBeenClicked: !previousState.hasBeenClicked
         }
      })
   }

   render() {
      return (
         <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
         </div>
      )
   }
}