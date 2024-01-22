import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);

    const data=[
        {
            'desc':'This is dummy data',
            'filesize':"1.5mb",
            'close': true,
            'tag':{isOpen:true,tagTitle:"Download Now", tagColor:"green"},
        },
        {
            'desc':'This is dummy data2',
            'filesize':"3.5mb",
            'close': false,
            'tag':{isOpen:true,tagTitle:"Upload", tagColor:"blue"},
        },
        {
            'desc':'This is dummy data3',
            'filesize':"4.5mb",
            'close': true,
            'tag':{isOpen:true,tagTitle:"Download Now", tagColor:"green"},
        },
    ]

    
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item, index)=>(
        <Card data={item} reference={ref} />
       ))}
    </div>
  )
}

export default Foreground