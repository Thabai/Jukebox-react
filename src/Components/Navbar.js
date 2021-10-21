import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>JUKEBOXY BOX</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/"  className="navbarHome">Home</Link>
        </li>
        <li >
          <Link to="/Albums" className="navbarAlbums">Albums</Link>
        </li>
        <li >
          <Link to="/defaultPlaylist" className="navbarDefault">Default Playlist</Link>
        </li>
        <li >
          <Link to="/createPlaylist" className="navbarCreate">Create A Playlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
