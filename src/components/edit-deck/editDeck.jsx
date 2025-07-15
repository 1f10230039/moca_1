import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardEditorItem from "../../components/card-editor-item/CardEditorItem";
import SaveBtn from "../../components/save-btn/SaveBtn";
import BackBtn from "../../components/back-btn/backBtn";
import "./edit-deck.css";

export default function EditDeck() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const decks = JSON.parse(localStorage.getItem("decks")) || [];
    const found = decks.find((d) => d.id === Number(id));
    if (found) {
      setDeck(found);
    }
  }, [id]);

  const updateCard = (i, field, value) => {
    const updated = [...deck.cards];
    updated[i][field] = value;
    setDeck({ ...deck, cards: updated });
  };

  const deleteCard = (i) => {
    const updated = deck.cards.filter((_, idx) => idx !== i);
    setDeck({ ...deck, cards: updated });
  };

  const addCard = () => {
    const updated = [...deck.cards, { front: "", back: "" }];
    setDeck({ ...deck, cards: updated });
  };

  const handleSave = () => {
    const decks = JSON.parse(localStorage.getItem("decks")) || [];
    const updatedDecks = decks.map((d) =>
      d.id === deck.id ? deck : d
    );
    localStorage.setItem("decks", JSON.stringify(updatedDecks));
    navigate("/decks");
  };

  if (!deck) return <p>読み込み中...</p>;

  return (
    <section className="edit-deck">
      <h2>デッキ名: {deck.title}</h2>
      <p>タグ: {deck.tag}</p>
      <p>{deck.cards.length}枚</p>
      <button onClick={addCard}>カードを追加</button>
      {deck.cards.map((card, index) => (
        <CardEditorItem
          key={index}
          card={card}
          index={index}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <SaveBtn onClick={handleSave} />
      <BackBtn />
    </section>
  );
}
