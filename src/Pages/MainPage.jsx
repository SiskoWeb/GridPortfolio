import React from 'react'
import '../style/bodygrid.css'
import avatar from '../images/Me.webp'

import arrow from '../images/Arrow.svg'
import about from '../images/About.svg'

import ricon from '../images/skills/react.png'
import giticon from '../images/skills/git.png'
import reduxicon from '../images/skills/redux.png'
import booticon from '../images/skills/bootstrap.png'


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function MainPage() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            What's up
        </Tooltip>
    );
    const renderWait = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            website in progresing now...
        </Tooltip>
    );


    const openWebsite = (link)=>{
        window.open(link, '_blank');
    }

 
    return (



        <div


            className='Sisko-Conteiner'>


            <div className='col-1-sisko'>


                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, scale: 0.5 }}
        
                    className='sub-col1'>

                    <div className='body-col1'
                   
                    >
                        <div


                            className='avatar'>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <img src={avatar}></img>
                            </OverlayTrigger>



                        </div>
                        <div className='hey-sisko'><h1>Hey, I'm Yassine 👋</h1></div>
                        <div className='col1-3'>  <h5>Front-end Developer</h5> <Link to='/about' className='arrow'> <img className='svg-arrow' src={arrow}></img> </Link></div>

                    </div>
                </motion.div>



                {   /*Part 2 add category  */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className='sub-col2'>
                    <div className='body-col2'>
                        <div



                            className='avatar'><img src={about}></img></div>
                        <div className='hey-sisko'><h6></h6></div>

                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderWait}
                        >
                            <div className='col2-3'>  <h4>LEARN MORE ABOUT ME</h4> <Link to='/about' className='arrow' > <img className='svg-arrow' src={arrow}></img> </Link></div>
                        </OverlayTrigger>
                    </div>
                </motion.div>


                {   /*Part 3 add category  */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className='sub-col3'>
                    <div className='body-col3'>
                        <div className='links-socail' > <p>Linkedin</p> <a className='arrow' href=''> <img className='svg-arrow' src={arrow}></img> </a></div>
                        <div className='line-links'></div>
                        <div className='links-socail' > <p>Github</p> <a className='arrow' href='https://github.com/SiskoWeb' target='_blank'> <img className='svg-arrow' src={arrow}></img> </a></div>
                        <div className='line-links'></div>
                        <div className='links-socail' > <p>Instagram</p> <a className='arrow' href=''> <img className='svg-arrow' src={arrow}></img> </a></div>


                    </div>
                </motion.div>

  {   /*Part 4 add category  */}
                <motion.div
                onClick={()=>openWebsite('https://newpyxel.netlify.app')}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, scale: 0.5 }}

                    className='sub-col4'>
                    <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <div className='body-col4'>
         
                    <div className='work-1' >

                    </div>
               

                    </div>
                    </OverlayTrigger>    
                 <div className='overflow-work'>
                 NewPyxel.ma
                 <div className='contact-arrow'>  
                
                  <Link className='arrow' to='/contact'> <img className='svg-arrow' src={arrow}></img> </Link></div>
             
                  </div>
           
                </motion.div>
  {   /*Part 5 add category  */}

                <motion.div
                onClick={()=>openWebsite('https://moviesdb-v1.netlify.app/')}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, scale: 0.5 }}

                    className='sub-col5'>
                    <div className='body-col4'>
                    <div className='work-2 ' >

                    </div>
              

                    
                  
                    </div>
                    <div className='overflow-work'>
                    NewPyxel.ma
                    <div className='contact-arrow'>  
                   
                     <Link className='arrow' to='/contact'> <img className='svg-arrow' src={arrow}></img> </Link></div>
                    </div>
                </motion.div>
  {   /*Part 6 add category  */}


                <motion.div
                onClick={()=>openWebsite('https://noaman.info/')}

                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }} className='sub-col7'>

                    <div className='body-col4'>
                    <div className='work-3 ' >

                    </div>
                  

                    </div>
                    <div className='overflow-work'>
                    NewPyxel.ma
                    <div className='contact-arrow'>  
                   
                     <Link className='arrow' to='/contact'> <img className='svg-arrow' src={arrow}></img> </Link></div>
                    </div>
                </motion.div>
  {   /*Part 7 add category  */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, scale: 0.5 }}

                    className='sub-col6'>
                    <div className='body-col6'>
                        <div className='contact-me'><div className='text'><h2>Let's work together ✨</h2> <h1>Get in touch now</h1></div> </div>
                        <div className='contact-arrow'>   <Link className='arrow' to='/contact'> <img className='svg-arrow' src={arrow}></img> </Link></div>

                    </div>
                </motion.div>
  {   /*Part 8 add category  */}

                <div className='sub-col8'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className='body-col8'>


                        <div> <p>What i do</p></div>
                        <div className='sub-8'>
                            <div className='list-sklls'>
                                <div className='skill'> <img src={ricon}></img> <p>Reactjs</p></div>
                                <div className='skill'> <img src={reduxicon}></img> <p>Redux</p></div>
                                <div className='skill'> <img src={booticon}></img> <p>Bootstrap</p></div>
                                <div className='skill'> <img src={giticon}></img> <p>Git</p></div>

                            </div>
                            <div className='contact-arrow arrow-skill'>   <Link className='arrow' to='/contact'> <img className='svg-arrow' src={arrow}></img> </Link></div>
                        </div>
                    </motion.div>

                </div>
            </div>

        </div>



    )
}
