import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./decks.css";
import NewDeckBtn from "../../components/new-deck-btn/NewDeckBtn";
import DeleteBtn from "../../components/delete-btn/deleteBtn";


export default function Decks()  {
  const [decks, setDecks] = useState([]);
  useEffect (() => {
    const storedDecks = JSON.parse(localStorage.getItem("decks")) || [];
    setDecks(storedDecks);
  },[]);
  const handleDelete = (id) => {
    const updateDecks = decks.filter((deck) => deck.id !== id);
    setDecks(updateDecks);
    localStorage.setItem("decks", JSON.stringify(updateDecks));
  };

  return (
    <>
      <NewDeckBtn />
      <section className="decks__summary">
        {decks.length === 0 ? (
          <p>まだデッキがありません</p>
        ):(
          <ul>
            {decks.map((deck) => (
              <li key={deck.id}>
                <h2>{deck.title}</h2>
                <p>#{deck.tag}</p>
                  <Link to={`/edit-deck/${deck.id}`}>
                    <button>編集</button>
                  </Link>
                  <DeleteBtn onClick={() => handleDelete(deck.id)}/>
              </li>
            ))}
          </ul>
        )} 
      </section>
    </>
  );
}