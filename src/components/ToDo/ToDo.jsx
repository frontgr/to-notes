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
          <button className="todo-input__add-btn"></button>
        </div>
        <div className="todo-item">
          <div className="todo-item__wrapper">
            <div className="todo-item__checkbox"></div>
            <p className="todo-item__text">Do homework</p>
          </div>
          <button className="todo-item__close-btn"></button>
        </div>
        <div className="todo-item">
          <div className="todo-item__wrapper">
            <div className="todo-item__checkbox todo-item__checkbox--checked"></div>
            <p className="todo-item__text todo-item__text--checked">
              Do another task
            </p>
          </div>
          <button className="todo-item__close-btn"></button>
        </div>
      </div>
    </>
  );
}
