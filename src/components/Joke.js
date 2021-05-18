import React from "react";

function Joke(props) {
    return (
    <div>
        <p style={{ display: props.question ? "block" : "none" }} className="question">{props.question}</p>
        <p className={ props.question ? "answer" : "question" }>{props.answer}</p>
        <br />
    </div>
    )
}

export default Joke;