import React, { Fragment } from "react";
import googlePlay from "../../imagenes/google.svg";
import Anuncio from "../../imagenes/imagen-cortada.png";

function ReproductorVideo() {
  return (
    <Fragment>
      <div style={{ marginLeft: "10px" }}>
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://res.cloudinary.com/nelsonweb/video/upload/v1591897373/video_sr49yw.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
        <h1>
          <b>Majestic</b>
        </h1>
        <p>
          <b>30,967 vistas•14 sep. 2017</b>
        </p>
        <p align="center">
          <img src={googlePlay} alt="Google Play" height="224px" width="224px"/>
        </p>

        <p align="center">
          <img src={Anuncio} alt="Anuncio" height="224px" width="524px"/>
        </p>
      </div>
    </Fragment>
  );
}

export default ReproductorVideo;
