import TypeWriterEffect from 'react-typewriter-effect';
import React from 'react';
import Typed from 'react-typed';
import './app.css'
export default function TypeW(){

return(
    <Typed className={'typed'}
        
        startDelay={2000}
        cursorColor="#3F3D56"
        strings={[
          'What happens when the 2 best Instructors in the world get together?',
          'AWS Cloud Practitioner Certification results... 100% Pass, 0 Failed',
          'Thank you Kayla and Jose!',
          'Congratulations Per Scholas Cycle 04!'
          
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
        loop
      
      />
      
)
    }