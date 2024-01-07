import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import ToDo from "./components/ToDo/ToDo.jsx";
import Notes from "./components/Notes/Notes.jsx";
function App() {
  const [currentService, setCurrentService] = useState("to-do list");

  const updateCurrentService = (currentService) => {
    setCurrentService(currentService);
  };

  return (
    <>
      <Header updateCurrentService={updateCurrentService} />
      {currentService === "to-do list" && <ToDo />}
      {currentService === "notes" && <Notes />}
    </>
  );
}

export default App;
