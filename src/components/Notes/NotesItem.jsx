import "./Notes.css";

export default function NotesItem({
  id,
  textOfNotes,
  onDelete,
}) {
  return (
    <>
      <div className="notes-item">
        <div className="notes-item__wrapper">
          <p
            className={
               "notes-item__text"
            }
          >
            {textOfNotes}
          </p>
        </div>
        <div className="notes-item__button">
          <button
            className="notes-item__close-btn"
            onClick={() => onDelete(id)}
          ></button>
        </div>
      </div>
    </>
  );
}
