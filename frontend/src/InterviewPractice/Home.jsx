import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="grid-container">
        <div className="grid-item">
          <img src="man-holding-camera.jpg" alt="Man holding a camera" />
        </div>
        <div className="grid-item">
          <img src="woman-holding-phone.jpg" alt="Woman holding a phone" />
        </div>
        <div className="grid-item">
          <img src="group-of-people.jpg" alt="Group of people in a room" />
        </div>
        <div className="grid-item">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="grid-item">
          <img src="camera-icon.jpg" alt="Camera icon" />
        </div>
        <div className="grid-item">
          <img src="phone-icon.jpg" alt="Phone icon" />
        </div>
        <div className="grid-item">
          <img src="person-icon.jpg" alt="Person icon" />
        </div>
        <div className="grid-item">
          <img src="group-icon.jpg" alt="Group icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
