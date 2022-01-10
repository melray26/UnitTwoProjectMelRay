import React from 'react';

function Example(props) {
  console.log(props);
  return (
    <div className="Example">
      <h3>Let's Begin the Game</h3>
      <button onClick={() => {props.cw()}}>Let's Start!</button>
    
    </div>
    
  );
}

export default Example;
