import React ,{useState} from 'react'
import '../style/navbar.css'
import logo from '../images/logo.webp'
import { BrowserRouter,Route,Routes,NavLink,Link} from 'react-router-dom'


export default function NavBar() {

    const [toggle, setToggle] = useState(true)


    // animation for icon navbar mobile
    const toggleModal = () => {
        setToggle(!toggle);
        console.log(toggle)
        if (toggle) {
            document.getElementById("bar1").classList.add("active")
            document.getElementById("bar2").classList.add("active")
            document.getElementById("bar3").classList.add("active")
     
            document.querySelector(".links").classList.add("showLinks")
          

        } else {
            document.getElementById("bar1").classList.remove("active")
            document.getElementById("bar2").classList.remove("active")
            document.getElementById("bar3").classList.remove("active")
        

            document.querySelector(".links").classList.remove("showLinks")

         
        }

    };
    // <NavLink to='/resume'>Resume</NavLink>
    return (
        <div>
            <header>
                <nav>
                    <div className='logo'><Link to='/'><img src={logo}></img></Link></div>
                    <div className='links'>
                        <NavLink exact to='/'>Home</NavLink>
                        <NavLink to='/Projects'>Works</NavLink>
                        <NavLink to='/about'>About</NavLink>
                     
                        <div className='hire-me-mobile'><Link to='/contact'>Get in touch</Link></div>
                    </div>

                    <div className='hire-me'><Link to='/contact'>Get in touch</Link></div>

                    { /* hamburger icon  */}
                    <div className="hamburger-menu" onClick={toggleModal} id="btnMobile">
                        <div id='bar1' className="bar-top"></div>
                        <div id='bar2' className="bar-middle "></div>
                        <div id='bar3' className="bar-bottom"></div>
                    </div>
                    { /* hamburger icon  */}
                </nav>

            </header>

        </div>
    )
}
