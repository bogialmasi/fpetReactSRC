import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div id="logo">
                    <div id="logo_text">
                        <h1><a href="index.html">black<span className="logo_colour">&amp;white</span></a></h1>
                        <h2>Black &amp; White Website Template.</h2>
                    </div>
                </div>
                <div id="menubar">
                    <ul id="menu">
                        <li className="selected">
                            <Link to="/">Home</Link>
                        </li>
                        <li><a href="examples.html">Examples</a></li>
                        <li><a href="page.html">A Page</a></li>
                        <li><a href="another_page.html">Another Page</a></li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}