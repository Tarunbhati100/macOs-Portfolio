import { WindowHeader } from '#components'
import { gallery, photosLinks } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import { Mail, Search } from 'lucide-react'
import React from 'react'

const Photos = () => {

    const { openWindow } = useWindowStore();

  return <>
        <div className="phts">

            <WindowHeader id="photos">
                <div className='w-full flex justify-end items-center gap-3 text-gray-500'>
                    <Mail className='icon'/>
                    <Search className='icon'/>
                </div>
            </WindowHeader>

            <div className='flex h-full'>
                <div className='sidebar'>
                    <h2>Photos</h2>

                    <ul>
                        {photosLinks.map(({id, icon, title})=>(
                            <li key={id}>
                                <img className="w-4" src={icon} alt={title}/>
                                <p className='text-sm font-medium truncate'>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='gallery'>
                    <ul>
                        {gallery.map(({ id, img })=>(
                            <li
                            key={id}
                            onMouseDown={(e) => {
                                e.stopPropagation();
                                openWindow("imgfile",{
                                id,
                                name: "Gallery image",
                                icon: "/images/image.png",
                                kind: "file",
                                fileType: "img",
                                imageUrl: img
                                
                            })}}
                            >
                                <img src={img} alt={`Gallery image ${id}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
  </>
}

const PhotosWindow = WindowWrapper(Photos,"photos")
export default PhotosWindow