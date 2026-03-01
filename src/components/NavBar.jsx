import React from 'react'
import dayjs from 'dayjs';
import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window';

const NavBar = () => {

    const {openWindow} = useWindowStore();

  return <nav>
    <div>
        <img src="/images/logo.svg"/>
        <p className="font-bold">Tarun's Portfolio</p>
        <ul>
            {navLinks.map(({id, name, type}) =>(
                <li key={id} onClick={() => openWindow(type)}>
                    <p>{name}</p>
                </li>
            ))}
        </ul>
    </div>
    <div>
        <ul>
            {navIcons.map(({id, img, type})=>(
                <li className='cursor-pointer' key={id} onClick={() => openWindow(type)}>
                    <img src={img} alt={`icon-${id}`}/>
                </li>
            ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
    </div>
  </nav>
}


export default NavBar