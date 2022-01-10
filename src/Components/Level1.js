import React, { Component } from "react";
import "./Level1.css";

class NumberDials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: 0,
      numberB: 0,
      numberC: 0,
      numberD: 0
    };
  }

  winning = (a, b, c, d) => {
    // Function to check and see if YOUR code (a,b,c,d).
    // matches the secret code (9,6,3,0).
    if (a === 9 && b === 6 && c === 3 && d === 0) {
      return true;
    }
    return false;
  };

  render() {
    // To increase readability we are making variables with shorter names.
    // This also saves us the trouble of unpacking state if we want to modify it later.
    const a = this.state.numberA;
    const b = this.state.numberB;
    const c = this.state.numberC;
    const d = this.state.numberD;

    return (
      <div
        className={
          "NumberDials" + (this.winning(a, b, c, d) ? " winning" : " losing")
        }
      >
        <h1 className="directions">Guess the 4-digit code</h1>
        <div className="hint">
          <h3>Target Sum: 18</h3>
          <h3>Your Sum: {a + b + c + d}</h3>
        </div>

        <div className="numberPlates">
          <div className="numberPlate">
            <button onClick={() => this.setState({ numberA: a + 1 })}>↑</button>
            <div className="digit">{this.state.numberA}</div>
            <button onClick={() => this.setState({ numberA: a - 1 })}>↓</button>
          </div>

          <div className="numberPlate">
            <button onClick={() => this.setState({ numberB: b + 1 })}>↑</button>
            <div className="digit">{this.state.numberB}</div>
            <button onClick={() => this.setState({ numberB: b - 1 })}>↓</button>
          </div>

          <div className="numberPlate">
            <button onClick={() => this.setState({ numberC: c + 1 })}>↑</button>
            <div className="digit">{this.state.numberC}</div>
            <button onClick={() => this.setState({ numberC: c - 1 })}>↓</button>
          </div>

          <div className="numberPlate">
            <button onClick={() => this.setState({ numberD: d + 1 })}>↑</button>
            <div className="digit">{this.state.numberD}</div>
            <button onClick={() => this.setState({ numberD: d - 1 })}>↓</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberDials;
