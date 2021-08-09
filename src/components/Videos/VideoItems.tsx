import React from 'react'
import { video } from './Video'

interface Props{
    video: video
}


export const VideoItems = ({video}: Props) => {
    return (
        <div>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        </div>
    )
}
