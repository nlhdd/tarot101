import { useState } from 'react';
import './App.css';

const cards = [
  "Le Mat", "Le Bateleur", "La Papesse", "L'Impératrice", "L'Empereur",
  "Le Pape", "L'Amoureux", "Le Chariot", "La Justice", "L'Hermite",
  "La Roue de Fortune", "La Force", "Le Pendu", "La Mort",
  "Tempérance", "Le Diable", "La Maison Dieu", "L'Étoile", "La Lune",
  "Le Soleil", "Le Jugement", "Le Monde",
];

const App = () => {
  const [drawnIndex, setDrawnIndex] = useState(null);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setDrawnIndex(randomIndex);
  };
let cardImage = "/cards/back.png";
let cardAlt = "Back of the card";

if (drawnIndex !== null) {
    cardImage = `/cards/${drawnIndex}.png`;
    cardAlt = cards[drawnIndex];             
  }

return (
  <div className="tarot">
    <h1>Nas is trying to read your future...</h1>

    <img className="card" src={cardImage} alt={cardAlt} /> 
    {/* { condition && <élément à afficher si la condition est vraie /> } */}
    <br>
    </br>
    <button onClick={drawCard}>Are you ready?</button>
    
    <footer className="footer">
       Cards by <a href="https://jcanabal.itch.io/major-arcana-pixel-art-free" target="_blank" rel="noopener">Jose Angel Canabal</a>
    </footer>
    </div>
  );
};

export default App;