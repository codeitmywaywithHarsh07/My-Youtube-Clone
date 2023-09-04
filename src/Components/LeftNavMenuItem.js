import React from 'react'

// Icons




export default function LeftNavMenuItem({title,icon,action,className}) {
  return (
    <div className={"text-white flex items-center text-sm cursor-pointer h-10 px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] "+className} onClick={action}
    >
        <span className='text-xl mr-5'>{icon}</span>
        <span>{title}</span>
    </div>
  )
}
