import React, { useState } from 'react';
import './App.css';
import ChoiceCard from "./components/ChoiceCard";
import { CHOICES, getRoundOutcome } from "./utils";
import ChoiceButtons from "./components/ChoiceButtons";


function App() {
  const [prompt, setGamePrompt] = useState("start");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    console.log(result);
    console.log(compChoice);

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
    setGamePrompt(result);
    setGameHistory(gameHistory);
  };


  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title="You" imgURL={playerChoice && playerChoice.url} previousWinner={previousWinner}
            />
            <div className="container">
            <ChoiceButtons onPlayerChoose={onPlayerChoose} />
            </div>
            <h1>{prompt}</h1>
            <ChoiceCard title="Computer" imgURL={computerChoice && computerChoice.url} previousWinner={previousWinner}
            />
          </div>
          <div className="col-md-4 themed-grid-col">
            <h3>History</h3>
            <ul>
              {gameHistory.map((result) => {
                return <li>{result}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;