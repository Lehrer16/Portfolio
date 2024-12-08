import { useState } from "react";
import React from "react";
import Link from 'react';
import Footer from "./Footer";
import "../App.css"

const Resume = () => {
    return (
        <div className="main">
            <h1>Proficencies</h1>
            <h2>Front-End Proficiencies </h2>
            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Javascript
                </li>
                <li>
                    Frameworks
                </li>
            </ul>
            <h2>Back-End Proficiencies</h2>
            <ul>
                <li>
                    React
                </li>
                <li>
                    SQL
                </li>
                <li>
                    NoSQL
                </li>
                <li>
                    Postgres
                </li>
                <li>
                    Mongoose
                </li>
            </ul>
            <h2>Video Game Design</h2>
            <ul>
                <li>
                    Extensive knowledge coding in GSC (Game Script Code) activisions proprietary language used to create Call of Duty.
                </li>
                <li>
                    Quest design.
                </li>
                <li>
                    Boss scripting and modeling.
                </li>
                <li>
                    Map and sound design.
                </li>
            
            </ul>

            
            <Footer />
        </div>
    )
    
}

export default Resume;