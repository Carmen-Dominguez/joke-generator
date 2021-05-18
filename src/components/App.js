import React from "react";
import Header from "./Header";
import Joke from "./Joke";
import Footer from "./Footer";

function App() {
    return (
        <div className="container">
            <Header />
            <Joke question={"question"} punchline={"Here is the punchline"} />
            <Joke punchline={"Here is the punchline"} />
            <Joke question={"question"} punchline={"Here is the punchline"} />
            <Joke punchline={"Here is the punchline"} />
            <Joke question={"question"} punchline={"Here is the punchline"} />
            <Footer />
        </div>
    );
}

export default App;