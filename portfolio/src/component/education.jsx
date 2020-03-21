import React, {Component} from "react";
import './education.css';

export default class Education extends Component {
    render() {
        return(
            <div id="education" className="education">
                <div className="title"> Education </div>
                <div>
                    <div className="university">
                        <div className="each-university">
                            <img className="logo" src={ require('../NU.png') } />
                            <ul className="text">
                                <li className="intro"> I am currently pursuing a Master degree of Computer Science. </li>
                                <li className="intro"> I've chosen the system track. Some relevant courses are: Scalable Software, Operating Systems,
                                    Computer Networking, Distributed System, Kernel Development.
                                </li>
                                <li className="intro"> GPA: 4.0 </li>
                            </ul>
                        </div>

                        <div className="each-university">
                            <img className="logo" src={ require('../umich.png') } />
                            <ul className="text">
                                <li className="intro"> I have received my Bachelor of Computer Science degree at University of Michigan, Ann Arbor. </li>
                                <li className="intro"> Some core courses involves Database, Artificial Intelligence, Machine Learning, Computer Vision.</li>
                                <li className="intro"> I did a summer CS research project with Professor Chowdhury, where I built a dashboard for a distributed system.</li>
                                <li className="intro"> GPA: 3.69 </li>
                            </ul>
                        </div>

                        <div className="each-university">
                            <img className="logo" src={ require('../sjtu.png') } />
                            <ul className="text">
                                <li className="intro"> I have received my Bachelor of ECE degree at Shanghai Jiao Tong University. </li>
                                <li className="intro"> I participated the Dual Degree program with University of Michigan, Ann Arbor (2+2). </li>
                                <li className="intro"> Some core courses involves: Intro to Circuits, Logic Design, Discrete Math, Data Structures. </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}