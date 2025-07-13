import { Link } from "react-router-dom";
import "./new-card-btn.css"

export default function NewCardBtn () {
    return (
        <>
            <section className="new-card-btn">
                <Link to="new-card">
                    <div className="new-card-btn__item">
                        <span className="material-symbols-outlined">add_2</span>
                        <span>新しくカードを作る</span>
                    </div>
                </Link>
            </section>
        </>
    );
}