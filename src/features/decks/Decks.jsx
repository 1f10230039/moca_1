import "./decks.css"
import NewDeckBtn from "../../components/new-deck-btn/NewDeckBtn";

export default function Decks  ()  {
  return (
    <>
      <h1>ようこそ Moca へ！</h1>
      <p>ここにデッキ一覧を追加していきます。</p>
      <NewDeckBtn />
    </>
  );
}