import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍋": "Lemon",
  "🥭": "Mango",
  "🍏": "Green Apple",
  "🍑": "Peach",
  "🥑": "Avocado",
  "🍉": "Watermelon",
  "🥓": "Bacon",
  "🧆": "Falafel",
  "🥟": "Dumpling",
  "🍯": "Honey Pot",
  "🍶": "Sake",
  "🍸": "Cocktail Glass",
  "☕": "Hot Beverage",
  "🥛": "Glass of Milk",
  "🧋": "Bubble Tea"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our DB, sorry!!";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h2>Emoji Interpreter - Food & Drinks</h2>

      <input onChange={emojiInputHandler} />

      <div style={{ padding: "1rem", fontWeight: "bold" }}> {meaning} </div>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ padding: "1rem", cursor: "pointer", fontSize: "x-large" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
