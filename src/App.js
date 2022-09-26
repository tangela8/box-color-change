import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'yellow',
      clickCounter: 0
    }
    this.changeColor = this.changeColor.bind(this);
  }
//function to change color back and forth
  changeColor() {
    // variable to hold the state of the color
    //if color is yellow make it red && if color is red make it yellow
    const newColor = this.state.color === 'yellow' ? 'red' : 'yellow';
    //variable to hold the state of the clickCounter
    const clicks = this.state.clickCounter
    //Adjust the states using setState method.
    //variables clicks and newColor hold the updated values
    this.setState({ 
      color: newColor,
      clickCounter: clicks + 1
     });
    
  }

  // onChange = (e) => {
  //   this.setState({
  //     color: 'orange',
  //     clickCounter: this.state.clickCounter++
  //   })
  //   console.log("click counter ===>", this.state.clickCounter)
  // }
  render() {
    return (
      //parent container
      <div className="App">
        <h1>Box color change</h1>
        {/* Creating the Box and changing it's color to the state */}
        <div className="colorBox" 
             style={{backgroundColor: 
             this.state.color}}
             onClick={this.changeColor}
        >
          <p className="clickMe">Click Me</p>
        </div>
        {/* Added Click Counter and changed it to the current state */}
        <h1>Click Counter: {this.state.clickCounter}</h1>
      </div>
    )
  }
}
