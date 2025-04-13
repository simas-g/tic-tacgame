import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name)
  function handleEdit() {
    setIsEditing((prev) => !prev);
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" value={playerName} onChange={handleChange} required></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
