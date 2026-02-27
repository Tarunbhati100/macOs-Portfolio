import {Dock, NavBar, Welcome} from '#components'
import React from 'react'
import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable'
import {Safari, Terminal, Resume, Finder, Text, Image, Contact} from '#Windows'

gsap.registerPlugin(Draggable);

const App = () => {
  return (<div>
    <NavBar/>
    <Welcome/>
    <Dock/>
    <Terminal/>
    <Safari/>
    <Resume/>
    <Finder/>
    <Text/>
    <Image/>
    <Contact/>
  </div>
  )
}

export default App