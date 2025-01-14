import React from 'react'
import "./AppDownload.css"

function AppDownload() {
  return (
    <div>
      <div className="app-download" id='app-download'>
        <p>For Better Experience Download <br />Restho App</p>
        <div className="app-download-platforms">
            <img src="playstore.png" alt="playstore" />
            <img src="appstore.png" alt="appstore" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
