import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./new-deck.css"
import NewCardBtn from "../../components/new-card-btn/NewDeckBtn";
import SaveBtn from "../../components/save-btn/SaveBtn";

export default function NewDeck () {
    const [deckTitle, setDeckTitle] = useState("");
    const [deckTag, setDeckTag] = useState("");
    const navigate = useNavigate();

    const handleSaveDeck = () => {
        const existingDecks = JSON.parse(localStorage.getItem("decks")) || [];
        const newDeck = {
            id: Date.now(),
            title: deckTitle,
            tag: deckTag,
            cards: []
        };
        const updateDecks = [...existingDecks,newDeck];
        localStorage.setItem("decks", JSON.stringify(updateDecks));
        console.log("保存されたデッキ一覧:", updateDecks)
        setDeckTitle("");
        setDeckTag("");

        navigate("/decks")
    };

    return (
        <>
            <section className="new-deck">
                <section className="new-deck__input">
                    <h2>デッキ名</h2>
                    <input type="text" 
                        placeholder="デッキ名を入力してください"
                        value={deckTitle}
                        onChange={(e) => setDeckTitle(e.target.value)}
                    />
                    <h2>タグ</h2>
                    <input type="text" 
                        placeholder="タグを入力してください"
                        value={deckTag}
                        onChange={(e) => setDeckTag(e.target.value)}/>
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
                <SaveBtn onClick={handleSaveDeck} />
            </section>
        </>
    );
}