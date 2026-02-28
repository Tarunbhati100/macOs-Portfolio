import { WindowControls, WindowHeader } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Image = () => {
    const { windows } = useWindowStore()
    const data = windows.imgfile?.data

    const name = data?.name ?? "Image Preview";
    const imageUrl = data?.imageUrl;
    
    return (
        <>
            <WindowHeader id="imgfile">
                <h2>{name}</h2>
            </WindowHeader>

            <div className='p-5 bg-white'>
                {imageUrl ? (
                    <div className='w-full'>
                        <img
                            src={imageUrl}
                            alt={name}
                            className='w-full h-auto max-h-[70vh] object-contain rounded'
                        />
                    </div>
                ):(
                    <p className="text-sm text-gray-400">No image...</p>
                  )}
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(Image,"imgfile")
export default ImageWindow