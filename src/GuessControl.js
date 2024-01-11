import React, {useState} from "react";
import Button from "./Button";

const GuessControl = ({onGuess}) => {

    const [currentGuess, setCurrentGuess] = useState("");

    function handleInputChange(event) {
        setCurrentGuess(event.target.value);
    }

    function onSubmitGuess() {
        onGuess(Number(currentGuess));
        setCurrentGuess("");
    }

    return (
        <>
            <input type="number" value={currentGuess} onChange={handleInputChange}/>
            <Button onClick={onSubmitGuess}>Submit Guess</Button>
        </>
    );
};

export default GuessControl;