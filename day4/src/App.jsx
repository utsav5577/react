import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
 

  return (  
    <div>
      <h1>React 1st Assignment</h1>
<img src="ucer.jpg" alt="Image Demo" class="photo"/>
    <ul>
        <li> Invert new traffic light</li>
        <li>Reverse a scene</li>
    </ul>
    <button onClick={callFun}>Click Me</button>
    </div>
  
  );
}
function callFun(){
            alert("Function called")

        }
export default App
