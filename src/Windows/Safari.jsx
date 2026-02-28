import { WindowControls, WindowHeader } from '#components'
import { projects } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, Shield, ShieldHalf } from 'lucide-react'
import React from 'react'

const Safari = () => {
  return <>

    <WindowHeader id="safari">
        
        <PanelLeft className='ml-10 icon'/>
        
        <div className="flex item-center gap-1 ml-5">
            <ChevronLeft className='icon'/>
            <ChevronRight className='icon'/>
        </div>

        <div className='flex-1 flex-center gap-3'>
            <ShieldHalf className='icon'/>
            
            <div className='search'>
                <Search className='icon'/>
                <input
                    type='text'
                    placeholder='Search or enter website name'
                    className='flex-1'
                />
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <Share className='icon'/>
            <Plus className='icon'/>
            <Copy className='icon'/>
        </div>

    </WindowHeader>


    <div className="project">
        <header className="mb-4 text-center">
            <h2>Tarun.dev</h2>
            <p className="text-gray-500">
            Systems, Algorithms & Research Engineering
            </p>
        </header>
        <div className='space-y-2'>
            {projects.map(({id, image, title, date, link, tech})=>(
                <div key={id} className='project-post'>
                    <div className='col-span-3'>
                        <img src={image} alt={title}/>
                    </div>

                    <div className='content col-span-9'>
                        <p>{date}</p>
                        <h3>{title}</h3>
                        <div className="tech-stack">
                            {tech.map((t, index) => (
                            <span key={index} className="tech-tag">
                                {t}
                            </span>
                            ))}
                        </div>
                        <a className='flex justify-end' href={link} target='_blank' rel="noopener noreferrer" >
                            Check out the full project <MoveRight className='icon-hover'/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </>
}

const SafariWindow = WindowWrapper(Safari,"safari")

export default SafariWindow