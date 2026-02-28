import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {
    const {closeWindow} = useWindowStore();

  return <div id="window-controls">
    <div className='control close' onClick={()=>closeWindow(target)}>
        <span className="icon">×</span>
    </div>
    <div className='control minimize'>
        <span className="icon">−</span>
    </div>
    <div className='control maximize'>
        <span className="icon">+</span>
    </div>
  </div>
}

export default WindowControls