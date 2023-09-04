import moment from 'moment'
import React from 'react';

export default function VideoLength({time}) {

    const videoLengthDisplay=moment()
        .startOf("day")
        .seconds(time)
        .format("H:mm:ss");
  return (
    <div className='absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md'>
        {videoLengthDisplay}
    </div>
  )
}
