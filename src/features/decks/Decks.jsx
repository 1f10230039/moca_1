import "./decks.css"
import NewDeckBtn from "../../components/new-deck-btn/NewDeckBtn";

export default function Decks  ()  {
  return (
    <>
      <NewDeckBtn />
      <section className="decks__summary"></section>
    </>
  );
}