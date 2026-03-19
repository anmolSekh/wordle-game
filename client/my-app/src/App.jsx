import { useState, useRef } from 'react'
import './App.css'

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
function entry(formData) {
  // const words = formData.get("");
  let word = "";
  for(let i = 1; i < 6; i++) {
    word += formData.get(`${i}`);
  }
  console.log(`${word}`) //check if word is real before moving on to next input

}
function lettersOnly(input) {
    // Replace any character that is NOT a letter (a-z, A-Z) with an empty string
    // The 'g' flag ensures all occurrences are replaced, not just the first
    // The regex /[^a-zA-Z]/g matches any character not in the range a-z or A-Z
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}
function App() {
  // const [count, setCount] = useState(0)
  const goal = "BRAIN";
  const inputRefs = useRef([]); //useref simply stores an empty array in input refs
  const getInputs = () => {
    const inputs = inputRefs.current;
    console.log(inputs);
  }
  const handleSubmit = () => { //Only allow submit if all letters full, only allow going to next letter if previous letter is full
    // console.log("Submit");
    for(let i = 0; i < inputRefs.current.length; i++) {
      if(inputRefs.current[i].value == goal[i]) { 
        //Make letter green yellow or grey like wordle
        //make sure submit allows word to stay
        console.log("Correct letter");
      } else {
        console.log("Incorrect Letter");
      }
    }
  }
  const handleKeyUp = (event,index) => { //Once key is released move to next square
    console.log(`Key pressed at ${index}:`, event.key); 
    if (isLetter(event.key) && index < inputRefs.current.length-1) {
      inputRefs.current[index + 1].focus();
    } else if(event.key === "Backspace") {
      inputRefs.current[index-1].focus();
    }
    //  else if (index === 4 && event.key === "Enter" && inputRefs.current[index].value.length === 1) {
    //   // console.log("Submitting");
    // }
  }
  return (
    <>
      <section id="word">
        <div id="first"> {/* first word*/}
          <form id="word1" action={entry} onSubmit={handleSubmit}>
            <input type = "text" name='1' id="first1" maxLength="1" onInput={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[0] = e)} onKeyUp={(e) => handleKeyUp(e,0)}></input>
            <input type = "text" name='2' id="first2" maxLength="1" onInput={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[1] = e)} onKeyUp={(e) => handleKeyUp(e,1)}></input>
            <input type = "text" name='3' id="first3" maxLength="1" onInput={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[2] = e)} onKeyUp={(e) => handleKeyUp(e,2)}></input>
            <input type = "text" name='4' id="first4" maxLength="1" onInput={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[3] = e)} onKeyUp={(e) => handleKeyUp(e,3)}></input>
            <input type = "text" name='5' id="first5" maxLength="1" onInput={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[4] = e)} onKeyUp={(e) => handleKeyUp(e,4)}></input>
            <input type="submit" hidden />
          </form>
          
        </div>
      </section>
      {/* handle illegal characters */}
      {/* create enter key handler * done */}
      {/* check input value by input id like if first1.value === word[0] */}
      {/* check if word is in dictionary */}
      {/* dont understand useState and useEffect yet */}
      

    </>
  )
}

export default App
