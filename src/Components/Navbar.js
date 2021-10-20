import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>JUKEBOXY BOX</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Albums">Albums</Link>
        </li>
        <li>
          <Link to="/defaultPlaylist">Default Playlist</Link>
        </li>
        <li>
          <Link to="/createPlaylist">Create A Playlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
