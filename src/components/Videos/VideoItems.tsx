import React from 'react'
import { video } from './Video'
import ReactPlayer from 'react-player/youtube'
import './VideoItem.css'
import {useHistory} from 'react-router-dom'
interface Props{
    video: video
}


export const VideoItems = ({video}: Props) => {

    const History = useHistory();


    return (
        <div className="col-md-4">
            <div className="card card-body video-card" onClick={()=> History.push(`/update/${video._id}`)}>
            <div className="d-flex justify-content-between">
            <h3>{video.title}</h3>
            <span className="text-danger">X</span>
            </div>
            <p>{video.description}</p>
            <div className='player-wrapper' >
                <ReactPlayer url={video.url} width='100%'
          height='360px'/>
            </div>
            </div>
        </div>
    )
}
