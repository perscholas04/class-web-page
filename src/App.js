import React from 'react';
import './app.css'
import { data } from './class.js';
import TypeW from './typeW'
import pLogo from './perscholas.jpeg'
import Pc from './pc.js';
import logo from './AWS.jpeg'

console.log(pLogo)
export default function App() {
    
  return (

          <>
        <main>
          <div className='header'>
          <img src={logo} alt="perScholas pic"/>
          <TypeW/>
          </div>
          <div className='card-box'>
          {data.map((data,key)=>{
            return(
                <Pc
                className="fcard"
                key={key}
                Name={data.Name}
                Role={data.Role}
                pic={data.pic}
                facebook={data.link.facebook}
                twitter={data.link.twitter}
                github={data.link.github}
                youtube={data.link.youtube}
                cnt={data.link.twitter ? "no" : "yes"}
                cnf={data.link.facebook ? "no" : "yes"}
                cny={data.link.youtube ? "no" : "yes"}
                cng={data.link.github ? "no" : "yes"}
                //card={'card'}
                //profileCard={'profile-card'}
                //cardHeader={'card-header'}
                //picDiv={'pic-div'}
                //name={'name'}
                //desc={'desc'}
                //sm={'sm'}
                />)
            })}
            </div>
        </main>
        
        </>
      
  );
}
// "deploy": "gh-pages -d dist",
// "deploy" : "aws s3 sync build . s3://class-perscholas --acl public-read",



