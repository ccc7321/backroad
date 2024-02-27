import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((pageLink) => (
            <li key={pageLink.id}>
              <a href={`#${pageLink.text}`} className="nav-link">
                {pageLink.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((socialLink) => (
            <li>
              <a
                href={socialLink.href}
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className={`fab ${socialLink.fontClass}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
