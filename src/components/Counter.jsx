function Counter ({count, changeCounter}) {
    return (
        <>
            <label>Count: {count}</label>
            <button id="increase" onClick={changeCounter}>Increase</button>
            <button id="decrease" onClick={changeCounter}>Decrease</button>
        </>
    );
}

export default Counter;