import { Link } from "react-router-dom";
import "./new-deck-btn.css"

export default function NewDeckBtn () {
    return (
        <>
            <section className="new-deck-btn">
                <Link to="new-deck">
                    <div className="new-deck-btn__item">
                        <span className="material-symbols-outlined">add_2</span>
                        <span>新しくデッキを作る</span>
                    </div>
                </Link>
            </section>
        </>
    );
}