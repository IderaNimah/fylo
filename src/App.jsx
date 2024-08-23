import "./App.css";
import BG from "./assets/bg-desktop.png";


const App = () => {
  return (
    <>
    <div className="starter">
      <img src={BG} alt="background-image" />
    </div>
    <StarterOne/>
    <StarterTwo/>
    </>   
  );
 
};

function StarterOne(){
  return(
  <div className="text">
   <h1>
    <img src="./images/logo.svg" alt=""/>
   </h1>
   <Icon/>
   </div>
  )
};

function Icon(){
return(
  <div className="icons">
    <>
    <img src="./images/icon-document.svg"/>
    </>
    <>
    <img src="./images/icon-folder.svg"/>
    </>
    <>
    <img src="./images/icon-upload.svg"/>
    </>
  </div>
)
};

function StarterTwo(){
  return(
  <div className="second">
    <h3>You've used <span className="diff">815GB</span> of your storage</h3>
    <Data/>
  </div>
  )
};

function Data(){
  return(
    <div className="datavisual">
     <h1>185<span>GB left</span></h1>
    </div>
  )
}
export default App;
