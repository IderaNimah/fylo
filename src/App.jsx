import React, { useState } from 'react';
import "./App.css";
import BG from "./assets/bg-desktop.png";

const App = () => {
  return (
    <>
      <div className="starter">
        <img src={BG} alt="background-image" />
      </div>
      <Res/>
    </>
  );
};
function Res(){
  return(
    <div className="see">
      <div className='ll'>
      <StarterOne />
      <StarterTwo />  
      </div>
      
    </div>
  )
}

function StarterOne() {
  return (
    <div className="text">
      <h1>
        <img src="./images/logo.svg" alt="" />
        
      </h1>
      <Icon />
    </div>
  );
}

function Icon() {
  return (
    <div className="icons">
      <img src="./images/icon-document.svg" alt="Document Icon" />
      <img src="./images/icon-folder.svg" alt="Folder Icon" />
      <img src="./images/icon-upload.svg" alt="Upload Icon" />
    </div>
  );
}

function StarterTwo() {
  const [sliderValue, setSliderValue] = useState(815); // Initial value

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className='tt'>

      <div className="second">
      <h3>
        You’ve used <span className="diff">{sliderValue}GB</span> of your storage
      </h3>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="1000" // Max storage value
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider"
        />
      </div>
      <Data sliderValue={sliderValue} />
      <div className='deet'>
        <h3>0GB<span>100GB</span></h3>
      </div>
    </div>   
    </div>
 
  );
}

function Data({ sliderValue }) {
  const maxStorage = 1000; // Example max storage in GB

  return (
    <div className="datavisual">
      <h1>
        {maxStorage - sliderValue} <span className="tiny">GB left</span>
      </h1>
    </div>
  );
}

export default App;