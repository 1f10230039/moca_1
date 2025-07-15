import "./back-btn.css"
import { Link } from "react-router-dom";

export default function BackBtn () {
    return (
        <>
            <section className="back-btn">
                <Link to="/decks">
                    <button className="back-btn__item">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span>戻る</span>
                </button>
                </Link>
            </section>
        </>
    );
}