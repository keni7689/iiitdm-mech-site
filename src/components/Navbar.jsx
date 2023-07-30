import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <div className="college-name">
          <span className="college-text">IIITDM</span>
          <span className="kancheepuram-text">Kancheepuram</span>
        </div>
      </div>
      <div className="nav-items">
        <div tabIndex={0} className="nav-link">
          <span>Home</span>

          <div className="nav-dropdown">
            <a href="/about" className="nav-option">
              Action 1
            </a>
            <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a>
          </div>
        </div>

        {/* <span className="nav-link">
          Admission
          {isAdmissionDropdownOpen && (
            <div className="nav-dropdown">
              <span className="nav-option">Action 1</span>
              <span className="nav-option">Action 2</span>
              <span className="nav-option">Action 3</span>
            </div>
          )}
        </span>
        <span className="nav-link">
          Academics
          {isAcademicsDropdownOpen && (
            <div className="nav-dropdown">
              <span className="nav-option">Action 1</span>
              <span className="nav-option">Action 2</span>
              <span className="nav-option">Action 3</span>
            </div>
          )}
        </span>
        <span className="nav-link">
          Campus
          {isCampusDropdownOpen && (
            <div className="nav-dropdown">
              <span className="nav-option">Action 1</span>
              <span className="nav-option">Action 2</span>
              <span className="nav-option">Action 3</span>
            </div>
          )}
        </span> */}
      </div>
      <div className="search-container">
        <button className={`search-button isSearchOpen ? "active" : ""`}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
