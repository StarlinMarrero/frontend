import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { video } from "./Video";
import * as videoServices from './VideoServices'

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const [video, setVideo] = useState<video>({
    title: "",
    description: "",
    url: "",
  });

  const HandletInputChange = (e: inputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
    console.log(video);
  };

  const HandletSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const res = await videoServices.crateVideo(video);
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo Video</h3>
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

              <button className="btn btn-danger mt-3">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
