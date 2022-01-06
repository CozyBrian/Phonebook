import { Link } from "react-router-dom";

const Header = ({ branding }) => {
  return (
    <nav className="nav navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
