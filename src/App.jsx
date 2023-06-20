import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("Banana");
  console.log(text);

  function handleSubmit(e) {
    e.preventDefault();
    fetchPhotos();
  }

  const fetchPhotos = useCallback(async () => {
    try {
      const result = await axios.get(`https://api.pexels.com/v1/search`, {
        params: {
          query: text
        },
        headers: {
          authorization:
            "tYAQxSYaVayNyIi9BZ4H1sPZ3SbgZiE4DLEpAdmVFM716AvYmgrum3kS"
        }
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
    <Router>
      <div className="App container">
        <Input text={text} setText={setText} handleSubmit={handleSubmit} />

        <div className="card-columns">
          {loading ? (
            <div className="spinner"></div>
          ) : photos.length === 0 ? (
            <h3 style={{ textAlign: "center" }}>Quite a Bad Luck</h3>
          ) : (
            photos.map((data) => (
              <div className="card" key={data.id}>
                <img
                  className="card-img-top"
                  src={data.src.medium}
                  alt="Waiting"
                />
                <div className="card-body">
                  <p className="card-text"> {data.photographer}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Router>
  );
}

function Input({ text, setText, handleSubmit }) {
  return (
    <div className="search-bar">
      <Link to="/features" className="btn">
        Feature
      </Link>
      <a href="/aboutus.html" className="btn">
        About Us
      </a>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="search-input"
        placeholder="Unleash Your Imagination...."
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
