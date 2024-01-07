import "./ToDo.css";

export default function ToDo(props) {
  return (
    <>
      <div className="todo">
        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter text..."
            className="todo-input__input"
          />
          <button className="todo-input__btn"></button>
        </div>
      </div>
    </>
  );
}
