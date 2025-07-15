import React from "react";
import "./card-editor-item.css"

export default function CardEditorItem ({card, index, updateCard, deleteCard}) {
    return (
        <div className="card-editor-item">
            <input 
                type="text"
                placeholder="問を入力してください"
                value={card.front}
                onChange={(e) => updateCard(index, "front", e.target.value)}
            />
            <input 
                type="text" 
                placeholder="答えを入力してください"
                value={card.back}
                onChange={(e) => updateCard(index, "back", e.target.value)}
            />
            <button onClick={() => deleteCard(index)}>削除</button>
        </div>
    );
}