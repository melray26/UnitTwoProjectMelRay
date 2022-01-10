import React, { Component } from "react";
import "./App.css";
import Example from "./Components/Example";
import Level1 from "./Components/Level1";
import Lost from "./Components/Lost";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
      score: 0,
      start: 0,
      seconds: 60
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      //black screen at zero if ointts dont equal 2
      //blue screen if befo
    }
  }

  //Game screen comonents return is rendered
  //Add time to old project

  // checkWinner function
  checkWinner = () => {
    // Need some conditional to check if they have won Level 1 and increase the score if they win
    let score = this.state.score;
    score++;
    this.setState({ score: score });
    console.log("CHECKING");
  };

  checkStart = () => {
    // How to use the check winner conditional from level 1 Js to appply to score
    let start = this.state.start;
    start++;
    this.setState({ start: start });
    console.log("Start");
  };

  render() {
    if (this.state.start == 0) {
      return (
        <div>
          <button onClick={this.startTimer}>Beginning</button>
          m: {this.state.time.m} s: {this.state.time.s}
          {/* Level 1 components multiple click events */}
          <Example cw={this.checkStart}  />
        </div>
      );
    } else if (this.state.start == 1 && this.state.score == 0) {
      return (
        <div>
          m: {this.state.time.m} s: {this.state.time.s}
          {/* Level 1 components */}
          <h1>THIS IS LEVEL 1 </h1>
          <Level1 />
        </div>
      );
    } else if (this.state.start == 1 &&
      this.state.score == 1 &&
      this.timer > 0
    ) {
      return (
        <div>
          <button onClick={this.startTimer}>Beginning</button>
          m: {this.state.time.m} s: {this.state.time.s}
          {/* Level 1 components */}
          <h1>THIS IS LEVEL 2 </h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.startTimer}>Beginning</button>
          m: {this.state.time.m} s: {this.state.time.s}
          <h1>You LOST</h1>
          <Lost />
          {/* if statement that checks a score in state possible (inline styling)*/}
          {/* if the score is 0, render the level 1 */}
          {/* if the score is 1, render level 2 */}
          {/* {this.state.score == 0 ? 'Hide' : 'Show'} */}
        </div>
      );
    }
  }
}

export default App;
