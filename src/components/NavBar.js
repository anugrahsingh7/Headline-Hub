import React from 'react';

const NavBar = ({ onUrlChange }) => {
  const urls = {
    topHeadlines: "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=0f242ff4e67b3a734d117843614de000",
    hindi : "https://gnews.io/api/v4/top-headlines?category=general&lang=hi&country=in&max=10&apikey=0f242ff4e67b3a734d117843614de000",
    world :"https://gnews.io/api/v4/top-headlines?category=world&lang=en&apikey=0f242ff4e67b3a734d117843614de000",
    apple: "https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=in&apikey=0f242ff4e67b3a734d117843614de000",
    tesla: "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=in&apikey=0f242ff4e67b3a734d117843614de000",
    business: "https://gnews.io/api/v4/top-headlines?category=buisness&lang=en&country=in&apikey=0f242ff4e67b3a734d117843614de000",
    everything: "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&apikey=0f242ff4e67b3a734d117843614de000",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="">
          <img src="/logo.png" alt="logo" style={{ width: '50px' }} />
          Headline Hub
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={() => onUrlChange(urls.topHeadlines)}>Top Headlines</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onUrlChange(urls.world)}>World</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onUrlChange(urls.apple)}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onUrlChange(urls.tesla)}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onUrlChange(urls.business)}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onUrlChange(urls.everything)}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onUrlChange(urls.hindi)}>Hindi Headlines</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
