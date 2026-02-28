import React from 'react'
import WindowControls from './WindowControls'

const WindowHeader = ( {id, children} ) => {
  return (
    <div className="window-header">
        <WindowControls target={id}/>
        {children ?? null}
    </div>
  )
}

export default WindowHeader
