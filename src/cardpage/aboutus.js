import React from "react";
import "./aboutus.scss";

function Aboutus() {
  return (
    <div className="Cardcontainer">
      <div className="card">
        <div className="first-content">
          <span>image</span>
        </div>
        <div className="second-content">
          <span>
            Name: Farrel Shane Irwanto
            <br />
            Jurusan: Informatikan
            <br />
            NIM: 00000075399
          </span>
        </div>
      </div>
      <div className="card">
        <div className="first-content">
          <span>image</span>
        </div>
        <div className="second-content">
          <span>
            Name: Joshua Leslie Arihadi
            <br />
            Jurusan: Informatikan
            <br />
            NIM: 00000075451
          </span>
        </div>
      </div>
      <div className="card">
        <div className="first-content">
          <span>Source of API</span>
        </div>
        <div className="second-content">
          <span>The API</span>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
