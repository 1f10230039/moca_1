import { Link } from "react-router-dom";
import "./save-btn.css"

export default function SaveBtn () {
    return (
        <>
            <section className="save-btn">
                <Link to="decks">
                    <div className="save-btn__item">
                        <span className="material-symbols-outlined">add_2</span>
                        <span>保存する</span>
                    </div>
                </Link>
            </section>
        </>
    );
}