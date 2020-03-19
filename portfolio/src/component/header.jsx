import React, {Component} from "react";
import './header.css';

export default class Header extends Component {
    render() {
        return(
            <div className="header-bar">
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">Education</a></li>
                    <li><a href="#contact">Internships</a></li>
                    <li><a href="#contact">Projects</a></li>
                    <li><a href="#contact">CV</a></li>
                    <li><a href="#about">Contact</a></li>
                </ul>
            </div>

        );
    }
}