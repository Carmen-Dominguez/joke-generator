import React from "react";

function Joke(props) {
    return (
    <div>
        {renderQuestion(props.question)}
        <p className="answer">{props.punchline}</p>
        <br />
    </div>
    )
}

function renderQuestion(question) {
    if (question != null) {
        return (<p className="question">{question}</p>);
    } else return (null);
}



export default Joke;