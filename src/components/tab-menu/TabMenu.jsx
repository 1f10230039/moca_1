import { Link } from "react-router-dom";
import "./tab-menu.css"

export default function TabMenu () {
    return (
        <>
            <section className="tab-menu">
                <ul>
                    <li>
                        <Link to="/">
                            <div className="tab-menu__item">
                                <span className="material-symbols-outlined">home</span>
                                <span>HOME</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/decks">
                            <div className="tab-menu__item">
                                <span className="material-symbols-outlined">filter_none</span>
                                <span>DECKS</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="setting">
                            <div className="tab-menu__item">
                                <span className="material-symbols-outlined">settings</span>
                                <span>SETTING</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    );
}
