import React from "react";
import './app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);
export default function Card(props){
    
    return(
        
                <div className="card">
                    <div style={{background : "2px solid black"}} id='rofile-card'>
                        <div className="card-header">
                            <div className="pic-div">
                                <img className="pic" src={props.pic} alt="pic"></img>
                            </div>
                        </div>
                        <div className="name">{props.Name}</div>
                        <div className="desc">{props.Role}</div>
                        <div className="sm">
                            <a href={props.facebook} className="fab fa-facebook-f"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                            <a href={props.twitter} className="fab fa-twitter"><FontAwesomeIcon icon="fa-brands fa-twitter-square" /></a>
                            <a href={props.github} className="fab fa-github"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                            <a href={props.youtube} className="fab fa-linkedin"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                        </div>

                    </div>

                </div>
    )
    }