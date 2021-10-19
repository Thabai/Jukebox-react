import React, { useState, useEffect } from "react";
import AlbumSongs from "../Components/AlbumSongs.js";
import "../App.css";

const AlbumsAvailable = () => {
  const [album, setAlbum] = useState([]);
  const [error, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}api/albums`
      );
      if (response.status !== 200) {
        throw new error("oops");
      }
      const dataAlbum = await response.json();
      setAlbum(dataAlbum);
      setLoading(false);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <h1>Albums Available on Jukebox</h1>

      {album.length === 0 && <div>Loading Please Wait</div>}
      {album.length > 0 ? album.map((data, index) => {
                return (
                  <div className="album_container" key={index}>
                    <h2>Album Title: {data.albumTitle}</h2>
                    <AlbumSongs albumSongs={data.albumSongs} />
                  </div>
                );
            }): null}
    </div>
  );
};

export default AlbumsAvailable;
