import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>JUKEBOXY BOX</h2>
      </div>

      <ul className="navbar__links">
        <li className="navbarHome">
          <Link to="/">Home</Link>
        </li>
        <li className="navbarAlbums">
          <Link to="/Albums">Albums</Link>
        </li>
        <li className="navbarDefault">
          <Link to="/defaultPlaylist">Dafault Playlist</Link>
        </li>
        <li className="navbarCreate">
          <Link to="/createPlaylist">Create A Playlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
