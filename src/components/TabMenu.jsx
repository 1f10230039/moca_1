import { Link, useLocation } from "react-router-dom";
import "./tabmenu.css"
export default function TabMenu {
    const location = useLocation();

    const tabs = [
        {path: "/", label: "Home", icon:"home"}
    ]
}