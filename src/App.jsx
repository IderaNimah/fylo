import "./App.css";
import BG from "./assets/bg-desktop.png";


const App = () => {
  return (
    <>
    <div className="starter">
      <img src={BG} alt="background-image" />
    </div>
    <StarterOne/>

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
  <div>
    <img src="./images/icon-document.svg"/>
    <img src="./images/icon-folder.svg"/>
    <img src="./images/icon-upload.svg"/>
  </div>
)
};

// function StarterTwo(){
//   return(

//   )
// };
export default App;
