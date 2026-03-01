import { locations } from '#constants'
import useLocationStore from '#store/location'
import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import { clsx } from 'clsx'
import { Draggable } from 'gsap/Draggable'
import React, { useEffect } from 'react'

const Home = () => {

  const projects = locations.work?.children??[]
  const { setActiveLocation } = useLocationStore();

  const {openWindow} = useWindowStore()


  const handleOpenProjectFolder = (project) =>{
    setActiveLocation(project)
    openWindow('finder')
  }

  useGSAP(()=>{

    const [instance] = Draggable.create(".folder", {
      type: "x,y",
      bounds: window,
      edgeResistance: 0.9,
      minimumMovement: 5,
      allowEventDefault: true,
    })

    return () => instance.kill();
  },[])


  return <section id="home">
    <ul>
      {projects.map((project)=>(
        <li 
        key={project.id} 
        className={clsx("group folder", project.windowPosition)}
        onClick={()=>{
          handleOpenProjectFolder(project)
        }}
        >
          <img src='/images/folder.png' alt={project.name}/>
          <p>{project.name}</p>
        </li>
      ))}
    </ul>
  </section>
}

export default Home