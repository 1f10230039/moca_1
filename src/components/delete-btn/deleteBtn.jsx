import "./delete-btn.css";

export default function DeleteBtn ({onClick}) {
    return (
        <button className="delete-btn" onClick={onClick}>
            <span className="material-symbols-outlined">delete</span>
        </button>
    );
}