import { ClippyAssistant, Dock, Home, NavBar, Welcome, VideoWallpaper} from '#components'
import React, { useEffect } from 'react'
import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable'
import {Safari, Terminal, Resume, Finder, Text, Image, Contact, Photos, Preferences} from '#Windows'

gsap.registerPlugin(Draggable);

const App = () => {
  
  return (<div>
    <NavBar/>
    <VideoWallpaper/>
    <Welcome/>
    <Dock/>
    <Terminal/>
    <Safari/>
    <Resume/>
    <Finder/>
    <Text/>
    <Image/>
    <Contact/>
    <Home/>
    <Photos/>
    <Preferences/>
    <ClippyAssistant/>
  </div>
  )
}

export default App