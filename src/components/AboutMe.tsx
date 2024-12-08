import React from "react";
import "../App.css"
import Footer from "./Footer";

const Aboutme = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>Jesse Lehrer</h1>
                <h2>Software Engineer</h2>
                <p>I'm a full-stack web developer with a strong passion for creating things.</p>
                <p>I started coding when in 2014 creating mods for my favorite video games and fell in love with being able to create anything I want on a computer.</p>
                <p>Coding is the coolest puzzle in the world with a functional reward when it's complete.</p>
                <a href='mailto:jesseisthegreatest@gmail.com'>Contact Me</a>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
};

export default Aboutme;