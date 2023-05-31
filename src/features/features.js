import React, { useState } from "react";
import "./features.css";

function Feature() {
  const [hidden, sethidden] = useState(false);
  const showhidden = () => sethidden(!hidden);

  return (
    <>
      <div className="displayed">
        <div className="topdisplay">
          <h1>Need For Recouse An Image</h1>
          <p>
            if you need to search an image or adjust them ?, well all you need
            to do is just use this website to learn more click the button bellow{" "}
          </p>
          <span onClick={showhidden}>Learn more</span>
        </div>
        <div className="topdisplayimg">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.2020onsite.com%2Fhs-fs%2Fhubfs%2Fworking_t20_goEnbk.jpg%3Fwidth%3D2048%26name%3Dworking_t20_goEnbk.jpg&f=1&nofb=1&ipt=434eeac8d89fd744f7c7182c87e01ca75264203ee9630455dba02a5431ebcac3&ipo=images" alt="working place" />
        </div>
      </div>
      <div className={hidden ? "fhidden-open" : "fhidden-close"}>
        <ul>
          <li className="fhidden-part">
            <h1>Photo recouse</h1>
            <p>
              Foto recouse adalah versi berformat JSON dari foto Pexels. Titik
              akhir API Foto merespons dengan data foto yang diformat dalam
              bentuk ini.
            </p>
          </li>
          <li className="fhidden-part">
            <h1>Search For Photo</h1>
            <p>
              Endpoint memungkinkan Anda untuk mencari Pexels untuk topik apa
              pun yang Anda inginkan. Misalnya, kueri Anda bisa sesuatu yang
              umum seperti Alam, Harimau, Orang-orang. Atau bisa juga sesuatu
              yang spesifik seperti Kelompok orang bekerja.
            </p>
          </li>
          <li className="fhidden-part">
            <h1>Curate Photo</h1>
            <p>
              Titik akhir ini memungkinkan Anda menerima foto-foto real-time
              yang dikurasi oleh tim Pexels.
              <br />
              Kami menambahkan setidaknya satu foto baru per jam ke daftar yang
              dikurasi sehingga Anda selalu mendapatkan pilihan foto yang terus
              berubah dan sedang tren.
            </p>
          </li>
          <li className="fhidden-part">
            <h1>Get a photo</h1>
            <p>Menerima spesifik photo dari id tersebut</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Feature;
