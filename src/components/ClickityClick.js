import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
    // Define initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    // this.setState(state => ({
    //   hasBeenClicked: !state.hasBeenClicked}, 
    //   () => console.log(this.state.hasBeenClicked) // Prints true because in same async function
    // ));

    // Upodate hasBeenClicked based on previous state
    this.setState(previousState => {
      return { hasBeenClicked: !previousState.hasBeenClicked }
    });

    console.log(this.state.hasBeenClicked); // Prints false becase async update
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;