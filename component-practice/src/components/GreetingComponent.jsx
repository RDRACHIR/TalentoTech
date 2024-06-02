import React, { useState } from 'react';

export default function GreetingComponent() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputText);
  };

  return (
    <div>
      <input 
        type="text"  
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Escribe tu saludo aquí"
      />
      <button onClick={handleButtonClick}>Actualizar</button>
      <p>Texto input: {inputText}</p>
      <p>Texto Actualizado: {displayText}</p>
    </div>
  );
}