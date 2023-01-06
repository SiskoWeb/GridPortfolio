import React from 'react'
import '../style/about.css'

import arrow from '../images/Arrow.svg'



import { motion} from 'framer-motion'

import { Link } from 'react-router-dom'
export default function About() {

return(


        <div className='About-Conteiner'>

<div className='all-works'><h1>About Me</h1></div>
            <div className='col-1-sisko'>


                <div className='sub-col1'>
Part 1


</div>



                {   /*Part 2 add category  */}
                <div className='sub-col2'>
                
           <div className='hey'><h1 className='hey-font'>Hey, I'm Yassine 👋</h1> <h4>Front-end Developer</h4></div>

                </div>


                
                <div className='sub-col3'>
    <div className='about-col3'>  <h2>About me</h2>
    <p>I’m a Front-end Developer based in Morocco , Reactjs. I have worked in multidisciplinary fields, in both large and small companies, startups and as a freelancer.

    </p>
    </div>
                </div>


                <div className='sub-col4'>

               Part 4
                </div>


             
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                
                className='sub-col5'>
                <div className='body-col6'>
                <div className='contact-me'><div className='text'><h2>Let's work together ✨</h2> <h1>Get in touch now</h1></div> </div>
                <div className='contact-arrow'>   <Link className='arrow' to='/contact'> <img className='svg-arrow' src={arrow}></img> </Link></div>
                
                </div>
                </motion.div>
          

                <div className='sub-col6'>

                part 6
            </div>
            <div className='sub-col7'>

            part 7
        </div>
            </div>

        </div>



    )
}
