import "./new-deck.css"
import NewCardBtn from "../../components/new-card-btn/NewDeckBtn";

export default function NewDeck () {
    return (
        <>
            <section className="new-deck">
                <section className="new-deck__input">
                    <h2>デッキ名</h2>
                    <input type="text" placeholder="デッキ名を入力してください" />
                    <h2>タグ</h2>
                    <input type="text" placeholder="タグを入力してください" />
                </section>
                <section className="new-deck__card">
                    <NewCardBtn />
                    <section className="new-deck__card__information">
                        <p>カード一覧</p>
                        <p>5枚</p>
                    </section>
                    <section className="new-deck__card__summary">
                        ここにカード一覧が表示される
                    </section>
                </section>
            </section>
        </>
    );
}