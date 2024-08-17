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
    Fylo
   </h1>
   </div>
  )
};

// function StarterTwo(){
//   return(

//   )
// };
export default App;
