import React, { useEffect, useState } from "react";
import "./decks.css";
import NewDeckBtn from "../../components/new-deck-btn/NewDeckBtn";

export default function Decks()  {
  const [decks, setDecks] = useState([]);
  useEffect (() => {
    const storedDecks = JSON.parse(localStorage.getItem("decks")) || [];
    setDecks(storedDecks);
  },[]);

  return (
    <>
      <NewDeckBtn />
      <section className="decks__summary">
        {decks.length === 0 ? (
          <p>まだデッキがありません</p>
        ):(
          <ul>
            {decks.map}
          </ul>
        )} 
      </section>
    </>
  );
}