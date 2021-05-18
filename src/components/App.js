import React from "react";
import Header from "./Header";
import Joke from "./Joke";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Joke question={"What word is spelled incorrectly in every single dictionary?"} punchline={"Incorrectly."} />
                <Joke punchline={"People who use selfie sticks really need to have a good, long look at themselves."} />
                <Joke question={"How do you make the number one disappear?"} punchline={"Add the letter G and it’s “gone”!"} />
                <Joke punchline={"A dyslexic man walks into a bra."} />
                <Joke question={"Why dont blind people skydive?"} punchline={"Because it scares the crap out of their dogs."} />
                <Footer />
            </div>
        );
    }
}

export default App;