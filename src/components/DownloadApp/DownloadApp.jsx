import React from "react";
import './download.css'

const DownloadApp = () => {
  return (
    <div className="download-div">
      <h3>Download App</h3>
      <div className="d-flex flex-column gap-3">
        <button>
          <i className="bi bi-play-fill"></i>
          <span>Google Play</span>
        </button>
        <button>
          <i className="bi bi-apple"></i>
          <span>App Store</span>
        </button>
      </div>
    </div>
  );
};

export default DownloadApp;
