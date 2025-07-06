import "./new-deck.css"
import NewCardBtn from "../../components/new-card-btn/NewDeckBtn";

export default function NewDeck () {
    return (
        <>
            <section className="new-deck">
                <input type="text" placeholder="デッキ名を入力してください" />
                <input type="text" placeholder="タグを入力してください" />
                <NewCardBtn />
            </section>
        </>
    );
}