import React, { useState, useEffect } from "react";
import "../App.css";

const DefaultPlaylist = () => {
    const [defaultP, setDefaultP] = useState([]);
    const [error, setError] = useState({ error: false, message: "" });
    const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}api/playlist`
      );
      if (response.status !== 200) {
        throw new error("oops");
      }
      const data = await response.json();

      setDefaultP(data);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };

  console.log(defaultP);

  useEffect(() => {
    handleFetch();
  }, []);

    return (
    <div>
      <h1>Available Playlist</h1>

      {defaultP.length === 0 && <div>Loading Please Wait</div>}
      {defaultP.length > 0 ? defaultP.map((data, index) => {
        return (
          <div className="song_container" key={index}>
            <h2>{data.songTrack}</h2>
            <h2>{data.songArtist}</h2>
          </div>
        );
    }): null}
    </div>
  );
};

export default DefaultPlaylist;
