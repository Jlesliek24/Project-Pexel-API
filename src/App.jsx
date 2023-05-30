import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import { navbardata } from "./Navbar/navbardata";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("furniture");

  console.log(text);

  function handleSubmit(e) {
    e.preventDefault();
    fetchPhotos();
  }

  const fetchPhotos = useCallback(async () => {
    try {
      const result = await axios.get(`https://api.pexels.com/v1/search`, {
        params: {
          query: text,
        },
        headers: {
          authorization:
            "tYAQxSYaVayNyIi9BZ4H1sPZ3SbgZiE4DLEpAdmVFM716AvYmgrum3kS",
        },
      });
      console.log(result.data.photos);
      setPhotos(result.data.photos);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }, [text]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return (
    <div className="App container">
      <Input text={text} setText={setText} handleSubmit={handleSubmit} />

      <div className="card-columns">
        {loading ? (
          <h3>loading...</h3>
        ) : photos.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>Can't find image</h3>
        ) : (
          photos.map((data) => (
            <div className="card" key={data.id}>
              <img className="card-img-top" src={data.src.medium} alt="nicee" />
              <div className="card-body">
                <p className="card-text">Photograph by : {data.photographer}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Input({ text, setText, handleSubmit }) {
  const [sidebar, setsidebar] = useState(false);
  const showsidebar = () => setsidebar(!sidebar);

  return (
    <div className="search-bar">
      <div>
        <span className="Dropdownnavbar" onClick={showsidebar}>
          ☰
        </span>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-item">
          <li className="nav-toggle">
            <a to="#" className="nav-menu-item">
              <span onClick={showsidebar}>X</span>
            </a>
          </li>
          {navbardata.map((item, index) => {
            return (
              <li key={index} className={item.class}>
                <a to={item.path}>
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="search-input"
        placeholder="Search images..."
      />
    </div>
  );
}

export default App;
