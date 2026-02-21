import { useState } from "react";
import { Form } from "./Form";
import { Result } from "./Result";
import { ScoreButtons } from "./ScoreButtons";
import { commentries } from '../../utils/data';

export function ScoreKeeper () {
    const [score, setScore] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [overResult, setOverResult] = useState([]);
    const [hit, setHit] = useState('');
    const [commentary, setCommentary] = useState("");
    const [slicedCommentary, setSlicedCommentary] = useState("");

    const addScore = (num) => {
        setHit(num);

        const randomIndex = Math.floor(Math.random() * commentries[0].length);
        const tmpCommentary = commentries[num][randomIndex];

        setCommentary(tmpCommentary);
        setSlicedCommentary(
        tmpCommentary.length > 25
        ? tmpCommentary.slice(0, 25) + "..." 
        : tmpCommentary
        );
    }

    const addWicket = () => {
        setHit('W');

        const randomIndex = Math.floor(Math.random() * commentries[0].length);
        const tmpCommentary = commentries['W'][randomIndex];

        setCommentary(tmpCommentary);
        setSlicedCommentary(
        tmpCommentary.length > 25 
        ? tmpCommentary.slice(0, 25) + "..." 
        : tmpCommentary
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (hit === 'W') setWicket(prev => prev + 1);
        else setScore(prev => prev + hit);

        if (overResult.length === 6) setOverResult([{run: hit, cmnt: commentary}]);
        else setOverResult(prev => [{run: hit, cmnt: commentary}, ...prev]);
    }

    return (
        <>
            <h1>SCORE KEEPER</h1>
            <h2>Score: {score} / {wicket}</h2>
            <ScoreButtons addScore={addScore} addWicket={addWicket}/>
            <Result overResult={overResult} />
            <br />
            <Form hit={hit} slicedCommentary={slicedCommentary} handleSubmit={handleSubmit} />
            <hr />
        </>
    )
}