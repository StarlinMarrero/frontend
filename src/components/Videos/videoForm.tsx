import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { video } from "./Video";
import * as videoServices from './VideoServices'
import {toast, Toast} from 'react-toastify'
import {useHistory, useParams} from 'react-router-dom'

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
    id: string
}


const VideoForm = () => {

  const History = useHistory();
  const Params = useParams<Params>();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [video, setVideo] = useState<video>(initialState);

  const HandletInputChange = (e: inputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
    console.log(video);
  };

  const HandletSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const res = await videoServices.crateVideo(video);

    toast.success('Nuevo Video Agregado')
    History.push('/');
    setVideo(initialState);
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            {
              Params.id ?
              <h3>Actualizar Video</h3>
              :
              <h3>Nuevo Video</h3>
            }
            <form onSubmit={HandletSubmit}>
              <div className="form-group">
                <input
                  name="title"
                  className="form-control"
                  placeholder="Escribe un titulo"
                  autoFocus
                  onChange={HandletInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="url"
                  className="form-control"
                  placeholder="https://somesite.com/videourl"
                  onChange={HandletInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={4}
                  className="form-control"
                  placeholder="descripcion del video"
                  onChange={HandletInputChange}
                ></textarea>
              </div>
                {
                  Params.id ?
                  <button className="btn btn-warning mt-3">Actualizar</button>
                  :
                  <button className="btn btn-danger mt-3">Guardar</button>


                }
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
