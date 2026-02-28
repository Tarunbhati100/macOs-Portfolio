import { WindowControls, WindowHeader } from '#components'
import { locations } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import useLocationStore from '#store/location'
import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { Draggable } from 'gsap/Draggable'
import { Search } from 'lucide-react'
import React from 'react'

const Finder = () => {
    const { openWindow } = useWindowStore();
    const {activeLocation, setActiveLocation} = useLocationStore();
    const contentRef = React.useRef(null);

    const openItem = (item)=>{
        if(item.fileType ==='pdf') return openWindow("resume");
        if(item.kind === 'folder') return setActiveLocation(item);
        if(['fig','url'].includes(item.fileType) && item.href) return window.open(item.href,'_blank');

        openWindow(`${item.fileType}${item.kind}`,item);
    }

    const renderList = (name,items)=> (
        <div>
            <h3>{name}</h3>
            <ul>{
                items.map((item) => (
                    <li className={clsx(
                        item.id===activeLocation.id ? "active" : "not-active",
                    )} key={item.id} onClick={()=> setActiveLocation(item)}>
                    <img src={item.icon} className='w-4' alt={item.name}/>
                    <p className='text-sm font-medium truncate'>{item.name}</p>
                </li>
                ))
            }
            </ul>
        </div>
    )

    useGSAP(() => {
        if (!contentRef.current) return;
      
        const folders = contentRef.current.querySelectorAll(".finder-folder");
      
        const instances = [];
      
        folders.forEach((folder) => {
          const draggable = Draggable.create(folder, {
            type: "x,y",
            bounds: contentRef.current,
            edgeResistance: 0.9,
          })[0];
      
          instances.push(draggable);
        });
      
        return () => {
          instances.forEach((d) => d.kill());
        };
      
      }, { scope: contentRef, dependencies: [activeLocation] }); 

  return <>

    <WindowHeader id="finder">
        <Search className='icon' />
    </WindowHeader>


    <div className='bg-white flex h-full'>

        <div className='sidebar'>
            {renderList("Favorites",Object.values(locations))}
            {renderList("Work",locations.work.children)}
        </div>

        <ul ref={contentRef} className='content'>
            {activeLocation?.children.map((item)=>(
                <li key={item.id} className={clsx("group finder-folder",item.position)} onClick={()=>openItem(item)}>
                    <img src={item.icon} alt={item.name}/>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>

    </div>
  </>
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow