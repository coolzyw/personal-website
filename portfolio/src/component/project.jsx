import React, {Component} from "react";
import './project.css';
import video from '../GPU_driver.mov'

export default class Project extends Component {
    render() {
        return(
            <div id="projects" className="section-project">
                <div className="section-title"> Here are some fun projects I did! </div>
                <button className="section-subtitle"> System & Infrastructure </button>
                <div className="each-section-project">
                    <h4 className="project-name"> A simple web client and web server on top of TCP </h4>
                    <ul className="text">
                        <li className="intro"> Build up a client by parsing HTTP request format, supporting redirection, and large web pages. </li>
                        <li className="intro"> Build up a server by constructing HTTP response continuously. </li>
                        <li className="intro"> Supported multi-connection server by using Unix select sys call. </li>
                    </ul>
                </div>

                <div className="each-section-project">
                    <h4 className="project-name"> A reliable streaming transport protocol on top of UDP </h4>
                    <ul className="text">
                        <li className="intro"> Supported large file transmission by breaking data into chunks. </li>
                        <li className="intro"> Implemented packet reordering and corruption mechanism by using sequence number and checksum. </li>
                        <li className="intro"> Handled packet loss by using acknowledge and retransmission technique. </li>
                    </ul>
                </div>

                <div className="each-section-project">
                    <h4 className="project-name"> Network Routing </h4>
                    <ul className="text">
                        <li className="intro"> Implemented two mechanism (distance-vector and link-state) of routing algorithm in network. </li>
                        <li className="intro"> Handled the "count-to-infinity" problem by including a path of each node in memory. </li>
                        <li className="intro"> Removed outdated message in network transmission by using sequence number. </li>
                        <li className="intro"> Identified a bug in the public test cases. </li>
                    </ul>
                    <div className="demo-pic">
                        <img className="each-demo-pic" src={ require('../Figure_1.png') } />
                        <img className="each-demo-pic" src={ require('../Figure_2.png') } />
                        <img className="each-demo-pic" src={ require('../Figure_3.png') } />
                    </div>
                </div>

                <br/>
                <br/>
                <div className="each-section-project">
                    <h4 className="project-name"> Device driver initialization and test </h4>
                    <ul className="text">
                        <li className="intro"> Initialized a GPU device in kernel booting process. </li>
                        <li className="intro"> Configured the GPU to switch between text mode and 2D graphics mode, and designed a booting animated logo. </li>
                    </ul>
                </div>
                <video className="video" controls >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        );
    }
}