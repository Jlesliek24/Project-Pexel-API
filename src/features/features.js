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
        <div className="topdisplayimg">insert image here</div>
      </div>
      <div className={hidden ? "hidden-open" : "hidden-close"}>
        <ul>
          <li className="hidden-part">
            <h1>Photo recouse</h1>
            <p>
              Foto recouse adalah versi berformat JSON dari foto Pexels. Titik
              akhir API Foto merespons dengan data foto yang diformat dalam
              bentuk ini.
            </p>
          </li>
          <li className="hidden-part">
            <h1>Search For Photo</h1>
            <p>
              Endpoint memungkinkan Anda untuk mencari Pexels untuk topik apa
              pun yang Anda inginkan. Misalnya, kueri Anda bisa sesuatu yang
              umum seperti Alam, Harimau, Orang-orang. Atau bisa juga sesuatu
              yang spesifik seperti Kelompok orang bekerja.
            </p>
          </li>
          <li className="hidden-part">
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
          <li className="hidden-part">
            <h1>Get a photo</h1>
            <p>Menerima spesifik photo dari id tersebut</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Feature;
