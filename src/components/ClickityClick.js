import React from 'react';

class ClickityClick extends React.Component {

    constructor() {
        super();

        // Set initial state.
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        // Update state.
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked)) // prints true
        console.log(this.state.hasBeenClicked) // prints false

        // the above printouts are because setState() is asyncronous.
        // it will run the next line of code, line 19, before it's finished
        // running the setState call. 
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

export default ClickityClick;