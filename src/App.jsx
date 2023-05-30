import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

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
                <p className="card-text">{data.photographer}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Input({ text, setText, handleSubmit }) {
  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="form-control"
          placeholder="Search images..."
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default App;
