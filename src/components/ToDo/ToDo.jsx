import "./ToDo.css";
import ToDoItem from "./ToDoItem.jsx";
import { useState, useEffect } from "react";

export default function ToDo() {
  const [inputText, setInputText] = useState("");
  const [isStringBig, setisStringBig] = useState(false);
  const [ToDoData, setToDoData] = useState(
    JSON.parse(localStorage.getItem("ToDoData")),
  );
  useEffect(() => {
    localStorage.setItem("ToDoData", JSON.stringify(ToDoData));
  }, [ToDoData]);

  function handleClick() {
    if (!isStringBig && inputText.length > 0 && inputText.length <= 30) {
      const newElement = {
        id: Date.now(),
        isToDoChecked: false,
        textOfToDo: inputText,
      };
      setToDoData((prevState) => [...prevState, newElement]);
      setInputText("");
    }
  }
  function handleDelete(id) {
    setToDoData((prevState) => prevState.filter((item) => item.id !== id));
  }
  function handleCheck(id) {
    setToDoData((prevToDoData) => {
      return prevToDoData.map((item) => {
        if (item.id === id && !item.isToDoChecked) {
          return { ...item, isToDoChecked: true };
        } else if (item.id === id && item.isToDoChecked) {
          return { ...item, isToDoChecked: false };
        }
        return item;
      });
    });
  }

  function handleInputChange(event) {
    if (event.target.value.length > 30) {
      setisStringBig(true);
    } else {
      setisStringBig(false);
      setInputText(event.target.value);

      if (event.key === "Enter") {
        handleClick();
        event.target.value = "";
        setInputText("");
      }
    }
  }

  return (
    <>
      <div className="todo">
        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter text..."
            className="todo-input__input"
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
            value={inputText}
          />
          <button
            className="todo-input__add-btn"
            onClick={() => {
              handleClick();
            }}
          ></button>
        </div>
        <p className="big-str-alert">
          {isStringBig ? "String too big. Max lenght is 30." : ""}
        </p>
        {ToDoData.map((ToDo) => (
          <ToDoItem
            key={Math.random() * 0.1}
            id={ToDo.id}
            isToDoChecked={ToDo.isToDoChecked}
            textOfToDo={ToDo.textOfToDo}
            onDelete={handleDelete}
            onCheck={handleCheck}
          />
        ))}
      </div>
    </>
  );
}
