import axios from 'axios'
import React, {useEffect, useState} from 'react'

interface video {
    createdAt: string,
    description: string,
    title: string,
    updatedAt: string,
    url: string,
    _id: string,
}

const VideosList = () => {
    const [videos, setvideos]  = useState<video[]>([])

    const loadVideos = async () => {
      const res = await axios.get("http://localhost:4000/videos");
      setvideos(res.data);
      console.log(res);
    }

    useEffect(() => {
        loadVideos();
        console.log("bien");

    },[])
    return (
        <div>
            {videos.map((video) => {
                return <div>
                        <h3>{video.title}</h3>
                    </div>
            })}
        </div>
    )
}

export default VideosList
