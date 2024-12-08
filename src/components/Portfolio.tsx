import React from "react";
import Footer from "./Footer";
import "../App.css"

function Portfolio () {
    return (
        <div className="container">
            <h1 className = "portfolioTitle">Projects</h1>
            <p>Below is a showcase of the projects I've completed, with links to their GitHub pages.</p>

            <div className="project">
            <a href="https://github.com/GP-Person/Resilience-Office-Map" target = "blank">Resillience Office Map</a>
            
            
            
            </div>

            <div className="project">
                <a href="https://github.com/2talladam/Video-Game-Randomizer-1?tab=readme-ov-file" target = "blank">Video Game Randomizer</a>
                
                
            </div>


            <Footer />
        </div>
    )
}

export default Portfolio;