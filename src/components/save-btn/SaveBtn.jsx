import "./save-btn.css"

export default function SaveBtn ({ onClick }) {
    return (
        <>
            <section className="save-btn">
                <button className="save-btn__item" onClick={onClick}>
                    <span className="material-symbols-outlined">arrow_circle_down</span>
                    <span>保存する</span>
                </button>
            </section>
        </>
    );
}