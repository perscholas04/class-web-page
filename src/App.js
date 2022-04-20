import { Amplify } from 'aws-amplify';
import React from 'react';
import  * as Auth  from './awsconfig.js'
import { Authenticator } from '@aws-amplify/ui-react';
import Card from './card.js'
import './style.css'
import './app.css'
import { data } from './class.js';
import TypeW from './typeW'
import pLogo from './perscholas.jpeg'

Amplify.configure(Auth);
console.log(pLogo)
export default function App() {
    
  return (
    <Authenticator>
      {({ signOut, user }) => (
          <>
        <main>
          <img src={pLogo} alt="perScholas pic"/>
          <TypeW/>
          <h1>Hello {user.attributes.email}</h1>
          <button onClick={signOut}>Sign out{console.log(user)}</button>
          {data.map((data,key)=>{
            return(
                <Card
                className="fcard"
                key={key}
                Name={data.Name}
                Role={data.Role}
                pic={data.pic}
                facebook={data.link.facebook}
                twitter={data.link.twitter}
                github={data.link.github}
                youtube={data.link.youtube}
                //card={'card'}
                //profileCard={'profile-card'}
                //cardHeader={'card-header'}
                //picDiv={'pic-div'}
                //name={'name'}
                //desc={'desc'}
                //sm={'sm'}
                />)
            })}
        </main>
        
        </>
      )}
      
    </Authenticator>
  );
}




