import {Dock, NavBar, Welcome} from '#components'
import React from 'react'
import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable'
import Terminal from '#Windows/Terminal';

gsap.registerPlugin(Draggable);

const App = () => {
  return (<div>
    <NavBar/>
    <Welcome/>
    <Dock/>
    <Terminal/>
  </div>
  )
}

export default App