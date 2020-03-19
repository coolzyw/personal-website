import React, {Component} from "react";
import './header.css';

export default class Header extends Component {
    render() {
        return(
            <ul className="header-bar">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Education</a></li>
                <li><a href="#contact">Internships</a></li>
                <li><a href="#contact">Projects</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
        );
    }
}