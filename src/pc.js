import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { library } from "@fortawesome/fontawesome-svg-core";
import './style2.css'
library.add(fab);


export default function Pc(props){
return(
<div className="card">
    <div className="card-image">
        <img src={props.pic} alt="blank"/>
    </div>
    <ul className="social-icons">
        <li>
            <a href={props.facebook} target="_blank" className={props.cnf}><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
            <i className='bx bxl-facebook'></i>
            
        </li>
        <li>
            <a href={props.twitter} target="_blank" className={props.cnt}><FontAwesomeIcon icon="fa-brands fa-twitter-square" /></a>
            <i className='bx bxl-twitter' ></i>
        
        </li>
        <li>
            <a href={props.youtube} target="_blank" className={props.cny}><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
            <i className='bx bxl-linkedin-square' ></i>
        
        </li>
        <li>
            <a href={props.github} target="_blank" className={props.cng}><FontAwesomeIcon icon="fa-brands fa-github" /></a>
            <i className='bx bxl-github' ></i>
        
        </li>
    </ul>
    <div className="details">
        <h2>{props.Name}</h2>
        <span className="job-title">{props.Role}</span>
    </div>
</div>
)}
                            
                            
                           