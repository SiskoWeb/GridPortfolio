import React from 'react'
import AllWorks from '../Pages/AllWorks'
import About from '../Pages/About'
import ProjectPage from './ProjectPage'
import MainPage from '../Pages/MainPage'

import Contact from '../Pages/Contact'
import { AnimatePresence} from 'framer-motion'
// import {AnimatePresence } from 'framer-motion/dist/framer-motion'
import { BrowserRouter,Route,Routes,useLocation} from 'react-router-dom'

//all routes here 
export default function AnimatedRouter() {
    const location= useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route  path='/' element={ <MainPage/>}/>
    <Route  path='/about' element={ <About/>}/>
    <Route  path='/Projects' element={ <AllWorks/>}/>
    <Route  path='/contact' element={ <Contact/>}/>
    <Route  path='/Projects/noaman.info' element={     <ProjectPage/>}/>
    </Routes>
    </AnimatePresence>
  )
}
