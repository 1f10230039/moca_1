import { Routes, Route } from "react-router-dom";
import Home from "../features/home/Home";
import Decks from "../features/decks/Decks";
import Setting from "../features/setteings/settings";
import NewDeck from "../features/new-deck/NewDeck";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="decks" element={<Decks />}></Route>
            <Route path="setting" element={<Setting />}></Route>
            <Route path="new-deck" element={<NewDeck />}></Route>
            <Route path="decks/new-deck" element={<NewDeck />}></Route>
        </Routes>
    );
}