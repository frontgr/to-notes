import "./ToDo.css";

export default function ToDoItem({ id, isToDoChecked, textOfToDo, onDelete }) {
  return (
    <>
      <div className="todo-item">
        <div className="todo-item__wrapper">
          <div
            className={
              isToDoChecked
                ? "todo-item__checkbox todo-item__checkbox--checked"
                : "todo-item__checkbox"
            }
          ></div>
          <p
            className={
              isToDoChecked
                ? "todo-item__text todo-item__text--checked"
                : "todo-item__text"
            }
          >
            {textOfToDo}
          </p>
        </div>
        <button
          className="todo-item__close-btn"
          onClick={() => onDelete(id)}
        ></button>
      </div>
    </>
  );
}
