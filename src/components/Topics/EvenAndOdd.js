import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNumbers(userInput) {
    let arr = userInput.split(",");
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(parseInt(arr[i], 10));
      } else {
        odd.push(parseInt(arr[i], 10));
      }
    }

    this.setState({ evenArray: even, oddArray: odd });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4 value={"Evens and Odds"}></h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filterNumbers(this.state.userInput)}
        >
          {" "}
          Split{" "}
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
