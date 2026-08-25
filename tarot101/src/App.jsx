import { useState } from 'react';
import './App.css';

const cards = [
  "Le Mat", "Le Bateleur", "La Papesse", "L'Impératrice", "L'Empereur",
  "Le Pape", "L'Amoureux", "Le Chariot", "La Justice", "L'Hermite",
  "La Roue de Fortune", "La Force", "Le Pendu", "La Mort",
  "Tempérance", "Le Diable", "La Maison Dieu", "L'Étoile", "La Lune",
  "Le Soleil", "Le Jugement", "Le Monde",
];

const descriptions = [
  "New beginnings, spontaneity, a leap of faith.",   // 0 - Le Mat
  "Willpower, skill, turning ideas into action.",     // 1 - Le Bateleur
  "Intuition, mystery, hidden knowledge.",            // 2 - La Papesse
  "Abundance, creativity, nurturing.",                // 3 - L'Impératrice
  "Authority, structure, stability.",                 // 4 - L'Empereur
  "Tradition, guidance, shared beliefs.",             // 5 - Le Pape
  "Love, choice, alignment of values.",               // 6 - L'Amoureux
  "Determination, control, moving forward.",          // 7 - Le Chariot
  "Fairness, truth, cause and effect.",               // 8 - La Justice
  "Introspection, solitude, inner guidance.",         // 9 - L'Hermite
  "Cycles, change, turning points.",                  // 10 - La Roue de Fortune
  "Courage, patience, inner strength.",               // 11 - La Force
  "Surrender, new perspective, letting go.",          // 12 - Le Pendu
  "Endings, transformation, release.",                // 13 - La Mort
  "Balance, patience, moderation.",                   // 14 - Tempérance
  "Temptation, attachment, shadow self.",             // 15 - Le Diable
  "Sudden change, upheaval, revelation.",             // 16 - La Maison Dieu
  "Hope, renewal, inspiration.",                      // 17 - L'Étoile
  "Illusion, intuition, the unknown.",                // 18 - La Lune
  "Joy, success, vitality.",                          // 19 - Le Soleil
  "Awakening, reckoning, rebirth.",                   // 20 - Le Jugement
  "Completion, wholeness, achievement.",              // 21 - Le Monde
];

const App = () => {
  const [drawnIndex, setDrawnIndex] = useState(null);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setDrawnIndex(randomIndex);
  };
let cardImage = "/cards/back.png";
let cardAlt = "Back of the card";
let description = "";
let buttonText = "Read";
let buttonAction = drawCard;

if (drawnIndex !== null) {
  cardImage = `/cards/${drawnIndex}.png`;
  cardAlt = cards[drawnIndex];
  description = descriptions[drawnIndex];
  buttonText = "Retry";
  buttonAction = () => setDrawnIndex(null);
}

return (
  <div className="tarot">
    <h1>Nas is trying to read your future...</h1>

    <img className="card" src={cardImage} alt={cardAlt} /> 
    <p className="description">{description}</p>
    <button className="big-button" onClick={buttonAction}>{buttonText}</button>
    
    <footer className="footer">
  Cards by <a href="https://jcanabal.itch.io/major-arcana-pixel-art-free" target="_blank" rel="noopener">Jose Angel Canabal</a>
  <br />
  Made by <a href="https://github.com/nlhdd" target="_blank" rel="noopener">Nas</a>
</footer>
    </div>
  );
};

export default App;