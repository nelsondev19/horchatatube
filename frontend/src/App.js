import React, { Fragment } from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import googlePlay from "./imagenes/google-play.svg";
import anuncio from "./imagenes/imagen-cortada.png";

function App() {
  return (
    <Fragment>
      <Navigation/>
      <div className="grid-display">
        <div style={{marginLeft: '10px'}}>
          <video autoPlay muted loop id="myVideo">
            <source src="https://res.cloudinary.com/nelsonweb/video/upload/v1591897373/video_sr49yw.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <p className="title-video">
            <b>Majestic</b>
          </p>
          <p className="description-video">
            <b>
              30,967 vistas•14 sep. 2017
            </b>
          </p>
          <p align="center">
            <img src={googlePlay} alt="Google Play" height="224px" width="224px"/>
          </p>

            <p align="center">
            <img src={anuncio} alt="Google Play" className="img-anuncio"/>
          </p>
        </div>
        <div>
          <h4>A continuación</h4>
          <div className="grid-cards-videos" style={{backgroundColor: '#cae8f0', margin: '5px'}}>
            <div>
              <video muted loop id="myVideo">
                <source src="https://res.cloudinary.com/nelsonweb/video/upload/v1591897373/video_sr49yw.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="title-card-video">
              <h4>Energized</h4>
              <b>58,904 vistas</b>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
