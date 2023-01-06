import { useState,useCallback } from 'react'
import 'animate.css';
import './App.css'
import NavBar from './Components/NavBar'
import Practice from './Components/Practice'
import Footer from './Components/Footer'
import AnimatedRouter from './Components/AnimatedRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom'

function App() {
  // <Practice/>
  return (
    
    <div className="App">
    
    <div className='container'>
    <div class="alert alert-danger" role="alert">
    Website Under Construction!
</div>
    <BrowserRouter>
    <NavBar/>
  
  
   <AnimatedRouter/>

 


</BrowserRouter>

</div>
    </div>
  )
}

export default App
