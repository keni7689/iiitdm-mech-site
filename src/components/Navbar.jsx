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
              About
            </a>
            <a href="/about" className="nav-option">
              Message from HOD
            </a>
            {/* <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a> */}
          </div>
        </div>

        <div tabIndex={1} className="nav-link">
          <span>Acdemics</span>

          <div className="nav-dropdown">
            <a href="/about" className="nav-option">
              Acdemic Program
            </a>
            <a href="/about" className="nav-option">
              Curriculum
            </a>
            {/* <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a> */}
          </div>
        </div>

        <div tabIndex={0} className="nav-link">
          <span>Division</span>

          <div className="nav-dropdown">
            <a href="/about" className="nav-option">
              Design Division
            </a>
            <a href="/about" className="nav-option">
              Smart Manifacturing Divsion
            </a>
            <a href="/about" className="nav-option">
              Thermal Manifacturing Divsion
            </a>
            {/* <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a> */}
          </div>
        </div>

        <div tabIndex={0} className="nav-link">
          <span>reaserach</span>

          <div className="nav-dropdown">
            <a href="/about" className="nav-option">
              Graduate Research
            </a>
            <a href="/about" className="nav-option">
              Research Publication
            </a>
            <a href="/about" className="nav-option">
              Sponserd Project
            </a>
            {/* <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a> */}
          </div>
        </div>

        <div tabIndex={0} className="nav-link">
          <span>People</span>

          <div className="nav-dropdown">
            <a href="/about" className="nav-option">
              Faculty
            </a>
            <a href="/about" className="nav-option">
              Staff
            </a>
            <a href="/about" className="nav-option">
              Research Schollers
            </a>
            {/* <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a> */}
          </div>
        </div>

        <div tabIndex={0} className="nav-link">
          <span>Empolyment Oppourtunity</span>

          <div className="nav-dropdown">
            <a href="/about" className="nav-option">
              Empolyment Oppourtunity
            </a>
            {/* <a href="/about" className="nav-option">
              Smart Manifacturing Divsion
            </a>
            <a href="/about" className="nav-option">
              Thermal Manifacturing Divsion
            </a> */}
            {/* <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a> */}
          </div>
        </div>

        <div tabIndex={0} className="nav-link">
          <span>Gallery</span>

          <div className="nav-dropdown">
            <a href="/about" className="nav-option">
              Gallery
            </a>

            {/* <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a> */}
          </div>
        </div>

        <div tabIndex={0} className="nav-link">
          <span>Contacts</span>

          <div className="nav-dropdown">
            <a href="/about" className="nav-option">
              Contacts
            </a>

            {/* <a className="nav-option">Action 2</a>
            <a className="nav-option">Action 3</a> */}
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
