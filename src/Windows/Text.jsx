import { WindowControls, WindowHeader } from '#components';
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;
    
    const name = data?.name ?? "Text File";
    const image = data?.image;
    const subtitle = data?.subtitle;
    const description = data?.description;
    
    return (
        <>
        
            <WindowHeader id="txtfile">
                <h2>{name}</h2>
            </WindowHeader>

            <div className='p-5 space-y-6 bg-white'>
                {
                    image && (
                        <div className='w-full'>
                            <img src={image} alt={name} className='w-full h-auto rounder'/>
                        </div>
                    )
                }

                {subtitle && <h3 className='text-lg font-semibold'>{subtitle}</h3>}
                
                {Array.isArray(description) && description.length > 0 && (
                    <div className='space-y-3 leading-relaxed text-base text-grey-800'>
                        {description.map((para,idx)=>(
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )
                }
                {!data && (
                    <p className="text-sm text-gray-400">
                        Empty...
                    </p>
                )}
            </div>
        </>
    ) 
}


const TextWindow = WindowWrapper(Text,"txtfile")
export default TextWindow