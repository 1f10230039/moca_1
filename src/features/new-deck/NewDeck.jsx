import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./new-deck.css"
import SaveBtn from "../../components/save-btn/SaveBtn";
import BackBtn from "../../components/back-btn/backBtn";
import CardEditorItem from "../../components/card-editor-item/CardEditorItem";

export default function NewDeck () {
    const [deckTitle, setDeckTitle] = useState("");
    const [deckTag, setDeckTag] = useState("");
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    const handleSaveDeck = () => {
        const existingDecks = JSON.parse(localStorage.getItem("decks")) || [];
        const newDeck = {
            id: Date.now(),
            title: deckTitle,
            tag: deckTag,
            cards: cards
        };
        const updateDecks = [...existingDecks,newDeck];
        localStorage.setItem("decks", JSON.stringify(updateDecks));
        console.log("保存されたデッキ一覧:", updateDecks);
        setDeckTitle("");
        setDeckTag("");

        navigate("/decks")
    };

    useEffect(() => {
        console.log("cardsの状態が更新された:", cards);
        }, [cards]
    );

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
                        onChange={(e) => setDeckTag(e.target.value)}
                    />
                </section>
                <section className="new-deck__card">
                    <section className="new-deck__card__information">
                        <p>カード一覧</p>
                        <p>{cards.length}枚</p>
                    </section>
                    <section className="new-deck__card__summary">
                        <button
                            onClick={() => {
                                const updatedCards = [...cards, { front: "", back: "" }];
                                setCards(updatedCards);
                                console.log("追加後のカード一覧:", updatedCards);
                            }}
                        >
                            カードを追加
                        </button>
                        {cards.map((card, index) => (
                            <CardEditorItem 
                                key={index}
                                card={card}
                                index={index}
                                updateCard={(i, field, value) => {
                                    const updated = [...cards];
                                    updated[i][field] = value;
                                    setCards(updated)
                                }}
                                deleteCard={(i) => {
                                    const updated = cards.filter((_, idx) => idx !== i);
                                    setCards(updated);
                                }}
                            />
                        ))}
                    </section>
                </section>
                <SaveBtn onClick={handleSaveDeck} />
                <BackBtn />
            </section>
        </>
    );
}