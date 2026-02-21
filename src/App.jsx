import React, { useState } from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {

  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [overResult, setOverResult] = useState([]);
  let hit = 0;

  let [count, setCount] = useState(0);

  const changeCounter = (event) => {
      setCount(count += (event.target.id === "increase" ? 1 : -1));
  }

  function addScore (num) {
    hit = num;
    // if (wicket < 10) {
    //   setOverResult(prev => [...prev, num]);
    //   setScore(score + num);
    // }
  }

  function addWicket () {
    hit = 'w'
    // if (wicket < 10) {
    //   setOverResult(prev => [...prev, 'w']);
    //   setWicket(wicket + 1);
    // }
  }

  const ScoreButtons = () => (
    <div>
      <button onClick={() => addScore(0)}>0</button>
      <button onClick={() => addScore(1)}>1</button>
      <button onClick={() => addScore(2)}>2</button>
      <button onClick={() => addScore(3)}>3</button>
      <button onClick={() => addScore(4)}>4</button>
      <button onClick={() => addScore(6)}>6</button>
      <button onClick={addWicket}>Wicket</button>
    </div>
  )

  function handleSubmit (event) {
    event.preventDefault();
  }

  const Form = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" /> &nbsp;
      <input type="text" /> <br /> <br />
      <button>Submit</button>
    </form>
  )

  const Result = () => (
    <div>
      {overResult.map((run, ind) => (
        <React.Fragment key={ind}>
          {ind % 6 === 0 ? <br /> : null}
          <span>{run === 0 ? <strong>.</strong> : run}</span>
          &nbsp; &nbsp; &nbsp;
        </React.Fragment>
      ))}
    </div>
  )

  return (
    <>
      <h1>SCORE KEEPER</h1>
      <h2>Score: {score} / {wicket}</h2>
      {/* <ScoreButtons /> */}
      {/* <Result /> */}
      <br />
      {/* <Form /> */}
      <hr />
      <br /> <br />
      <Counter count={count} changeCounter={changeCounter} />
    </>
  )
};

export default App;
