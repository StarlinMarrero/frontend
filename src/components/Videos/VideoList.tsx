import React, {useEffect, useState} from 'react'
import { video } from './Video'
import * as videoServices from './VideoServices'
import {VideoItems} from './VideoItems'


const VideosList = () => {
    const [videos, setvideos]  = useState<video[]>([])

    const loadVideos = async () => {
      const res = await videoServices.getVideos();

        const formatedVideo = res.data.map(video => {
            return {
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt): new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt): new Date(),
                
                
            }
        }).sort((a, b) => b.createdAt.getTime() - a.updatedAt.getTime());


      setvideos(formatedVideo);
      
    }

    useEffect(() => {
        loadVideos();
        console.log("bien");

    },[])
    return (
        <div className="row">
            {videos.map((video) => {
                return <VideoItems video={video} key={video._id} />
            })}
        </div>
    )
}

export default VideosList
