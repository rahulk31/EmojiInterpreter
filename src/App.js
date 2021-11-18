import React, {useState} from 'react';
import "./styles.css";

const emojiDictionary = {
  "🤑": "Cash",
  "🥶": "Icy-Cold",
  "😱": "Scary",
  "❤️": "Love",
  "😴": "Sleeping",
  "😊": "Smiling",
  "🤐": "Nothing to Say"
}

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");
  const changeHandler = (event) => {
    let emoji = event.target.value;
    if(emoji in emojiDictionary) {
      meaning = emojiDictionary[emoji];
      setMeaning(meaning);
    } else {
      setMeaning("We do not have this emoji in our database")
    }
  }
  const clickHandler = (emoji) => {
    meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input className="input"  onChange={ changeHandler }/>
      <h3 style={{ color: "green", fontSize: "24px" }}>{ meaning }</h3>
      <h2>EMOJIS WE KNOW</h2>
      { emojisWeKnow.map(emoji => {
      return <span style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }} 
      onClick={ () => clickHandler(emoji) }> { emoji } </span>;
      }) }
      
    </div>
  );
}
