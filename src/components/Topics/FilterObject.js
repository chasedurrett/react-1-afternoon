import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      robots: [
        {
          name: "Tim",
          age: 2700,
          power: "laser",
        },
        {
          name: "joe",
          age: 100,
          power: "sharknado",
        },
        {
          name: "dwight",
          age: 9000,
        },
      ],
      userInput: "",
      filteredRobots: [],
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterRobots(prop) {
    let robotArr = this.state.robots;
    let filteredRobots = [];
    for (let i = 0; i < robotArr.length; i++) {
      if (robotArr[i].hasOwnProperty(prop)) {
        filteredRobots.push(robotArr[i]);
      }
    }
    this.setState({ filteredRobots: filteredRobots });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.robots, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterRobots(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredRobots, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
