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
    <h3>You've used 815GB of your storage</h3>
  </div>
  )
};
export default App;
