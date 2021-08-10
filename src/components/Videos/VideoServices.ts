import axios from 'axios'
import { video } from './Video';

export const getVideos = async () =>{
    return await axios.get("http://localhost:4000/videos");
    
}

export const crateVideo = async (data: video) =>{
    return await axios.post("http://localhost:4000/videos", data);
}