import * as React from 'react';

const {useState} = React


export default function App(){

    const [counter, setCounter] =useState(0)
    const data = require('./class.json')
    const students = data
    console.log(students)
    return (
        <div className="App">
            <h1>Hello Per Scholas</h1>
            <p>
                {counter}
            </p>
            <button onClick={()=>{
                setCounter(c => c+1)
            }}>Increase Counter</button>

            
            <>{
                students.map(({Name, Role})=>(
                    <div key={Name}>
                        <span>{Name}</span><br/>
                        <span>{Role}</span>
                        <br/>
                        <br/>
                    </div>
                ))
                }</>

        </div>
    )

}





// import axios from "axios"
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
