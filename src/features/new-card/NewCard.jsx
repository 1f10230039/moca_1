import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./new-card.css"
import SaveBtn from "../../components/save-btn/SaveBtn";

export default function NewCard () {
    const [cardQ, setCardQ] = useState("");
    const [cardA, setCardA] = useState("");
    const navigate = useNavigate();

    const handleSaveCard = () => {
        const existingCards = JSON.parse(localStorage("cards")) || [];
        const newCard = {
            id : Date.now(),
            question : cardQ,
            answer : cardA,
        };
        const updateCards = [...existingCards,newCard];
        localStorage.setItem("cards", JSON.stringify(updateCards));
        console.log("保存されたカード一覧",updateCards);
        setCardQ("");
        setCardA("");

        navigate("/new-deck")
    };
    return (
        <>
            <section className="new-card">
                <section className="new-card__input">
                    <h2>問</h2>
                    <input type="text"
                        placeholder="問を入力してください"
                        value={cardQ}
                        onChange={(e) => setCardQ(e.target.value)}
                    />
                    <h2>答え</h2>
                    <input type="text"
                        placeholder="答えを入力してください"
                        value={cardA}
                        onChange={(e) => setCardA(e.target.value)}
                    />
                </section>
                <SaveBtn onClick={handleSaveCard} />
            </section>
        </>
    );
}