import { useState } from "react";

export default function Player({ initialName, symbol }) {
  let [name, setName] = useState(initialName);
  let [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleInputOnChange(event){
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = 'Edit'
  if(isEditing){
    playerName = <input type="text" required value={name} onChange={handleInputOnChange}/>
    btnCaption="Save"
  }


  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {btnCaption}
      </button>
    </li>
  );
}
