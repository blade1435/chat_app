import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact name="Lorraine Vargas" 
      avatar="https://randomuser.me/api/portraits/women/61.jpg"
       online/>
         <Contact name="Vickie Dunn" 
      avatar="https://randomuser.me/api/portraits/women/9.jpg"
       offline/>
         <Contact name="Amelia Carroll" 
      avatar="https://randomuser.me/api/portraits/women/11.jpg"
       online/>
    </div>
  );
}

export default App;
