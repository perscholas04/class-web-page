import TypeWriterEffect from 'react-typewriter-effect';
import React from 'react';

export default function TypeW(){

return(
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'poppins',
          color: '#2149d7',
          fontWeight: 700,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'What happens when the 2 best Instructors in the world get together?',
          'Class graduation rate ...... 100%',
          'AWS Cloud Practitioner Certification results... 100% Pass, 0 Failed',
          'Thank you Kayla and Jose!',
          'Congratulations Per Scholas Cycle 04!'
          
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
        loop={true}
      />
      
)
    }