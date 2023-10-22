import React from "react";


function Profile() {
  return (
    <div className="profileContainer">
    
    <div className="profileInnerContainer">      
    <div className="profileInfo">
        <h1>BIANCA UZWICK</h1>
        <h2><span className="hyphen">-</span> an architect</h2>
      </div>
      <div className="profilePicContainer">
        <div className="picInnerContainer">
          <img className="pic" src="https://storage.googleapis.com/gorkemtandogan-images/Projects/Architect%20Portfolio/profile_pic.png" alt="" srcset="" />
        </div>
      </div>
    </div>

      <div className="profileCompanyName">
        <h1>BUZ <span className="companyNameDesign">DESIGN</span></h1>
      </div>
    </div>
  );
}

export default Profile;
