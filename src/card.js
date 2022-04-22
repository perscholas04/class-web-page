import React from "react";
import './app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { library } from "@fortawesome/fontawesome-svg-core";
import { data } from "./class";
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
                            <a href={props.facebook} className={href = 'facebook' ? "nohide" : "hide"}><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                            <a href={props.twitter} className={data.link.twitter = 'twitter' ? "nohide" : "hide"}><FontAwesomeIcon icon="fa-brands fa-twitter-square" /></a>
                            <a href={props.github} className={data.link.github = 'github' ? 'nohide' : "hide"}><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                            <a href={props.youtube} className={data.link.youtube = 'youtube' ? props.youtube : "hide"}><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                        </div>

                    </div>

                </div>
    )
    }