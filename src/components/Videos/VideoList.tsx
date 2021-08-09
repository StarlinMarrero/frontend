import React, {useEffect, useState} from 'react'
import { video } from './Video'
import * as videoServices from './VideoServices'
import {VideoItems} from './VideoItems'

const VideosList = () => {
    const [videos, setvideos]  = useState<video[]>([])

    const loadVideos = async () => {
      const res = await videoServices.getVideos();
      setvideos(res.data);
      
    }

    useEffect(() => {
        loadVideos();
        console.log("bien");

    },[])
    return (
        <div>
            {videos.map((video) => {
                return <VideoItems video={video} />
            })}
        </div>
    )
}

export default VideosList
