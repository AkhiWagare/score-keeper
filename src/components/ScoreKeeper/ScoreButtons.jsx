export const ScoreButtons = ({addScore, addWicket}) => (
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