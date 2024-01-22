import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div 
        drag
        dragConstraints={reference}
        whileDrag={{scale:1.2}}
        dragElastic={0.3}
        dragTransition={{bounceStiffness:600, bounceDamping:10}}
        className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 px-5 py-10 text-white overflow-hidden'>
        <FaFileAlt />
        <p className='text-xs mt-5 leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between mb-3 px-8 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center'>
                    {data.close ? <IoIosCloseCircle /> : <IoCloudDownloadSharp size='.8em' color='#000'/>}
                </span>
            </div>
            {/* {
                data.tag.isOpen ? (
                    <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                    <h3 className='text-sm'>Download Now</h3>
                </div>
                ):null
            } */}

{
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
                    <h3 className='text-sm'><a target="_blank" href={`${data.link}`}>{data.tag.tagTitle}</a></h3>
                </div>
                )
            }

            
        </div>
    </motion.div>
  )
}

export default Card