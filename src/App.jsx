import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import ToDo from "./components/ToDo/ToDo.jsx";
import Notes from "./components/Notes/Notes.jsx";
if (localStorage.getItem("ToDoData") === null) {
  localStorage.setItem(
    "ToDoData",
    JSON.stringify([
      {
        id: 1,
        isToDoChecked: false,
        textOfToDo: "Enter any todo 👍",
      },
    ]),
  );
}
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
