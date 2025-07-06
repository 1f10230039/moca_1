import { Link } from "react-router-dom";
import "./tab-menu.css"

export default function TabMenu () {
    return (
        <>
            <section className="tab-menu">
                <ul>
                    <li className="tab-menu__item">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="tab-menu__item">
                        <Link to="/decks">DECKS</Link>
                    </li>
                    <li className="tab-menu__item">
                        <Link to="setting">SETTING</Link>
                    </li>
                </ul>
            </section>
        </>
    );
}
