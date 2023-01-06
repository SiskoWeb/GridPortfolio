import React from 'react'
import '../style/footer.css'
import logo from '../images/logo.webp'
import { BrowserRouter,Route,NavLink} from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
    <div className='footer'>
    <div className='footer-col1'> 
    <img src={logo}></img>

    <div className='links-footer'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/Projects'>Works</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
    </div>

    </div>
    
    <div className='footer-col2'> 
    <div className='icons-footer'>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-square-github"></i>
    <i class="fa-brands fa-square-instagram"></i>
    <i class="fa-brands fa-youtube"></i>

  </div>
    </div>

    <div className='footer-col3'> 
    <p>@ 2022 <span>Yassine</span></p>
    <p>Built by <span>Me</span> </p>
    </div>
    </div>
    </footer>
  )
}
