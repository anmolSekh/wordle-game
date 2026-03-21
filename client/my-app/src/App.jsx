import { useState, useRef } from 'react'
import './App.css'

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i); //Check if single character is an alphabetic letter
}
function isWord(str,used) { //add word checking logic here
  // console.log(`Evaluating what is ${str} ? Type: ${typeof(str)}`);
  // if(word == "CRANE") {
  //   console.log("YES"); 
  // }
  return !used.current.includes(str);
}
function lettersOnly(input) { //use regex to make sure input is only a character
    // Replace any character that is NOT a letter (a-z, A-Z) with an empty string
    // The 'g' flag ensures all occurrences are replaced, not just the first
    // The regex /[^a-zA-Z]/g matches any character not in the range a-z or A-Z
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}
function App() {
  // const [count, setCount] = useState(0)
  const goal = "BRAIN";
  const inputRefs = useRef([]); //useref([]) simply stores an empty array in input refs
  const usedWords = useRef([]);
  // usedWords.current.push("CRANE"); //Test for duplicate words
  const getInputs = () => {
    const inputs = inputRefs.current;
    console.log(inputs);
  }
  const handleSubmit = (event) => { //Only allow submit if all letters full, only allow going to next letter if previous letter is full
    // console.log("Submit");
    event.preventDefault();
    let word = "";
    for(let i = 0; i < inputRefs.current.length; i++) {
      let letter = inputRefs.current[i].value;
      word += letter;
      if(letter == goal[i]) { 
        //Make letter green yellow or grey like wordle
        //make sure submit allows word to stay
        console.log("Correct Letter");
      } else {
        console.log("Incorrect Letter");
      }
    }
    console.log(`Word submitted: ${word}`);
    if(isWord(word,usedWords)) {
      //If word is real run game logic
      //Run game logic
      //append to usedWords
      usedWords.current.push(word); //Adds word to list
      //go to next word
    } else {
      console.log("Illegal word");
    }
    console.log(usedWords.current); //maybe make used words into map instead to check if word is in array;
  }
  const handleKeyUp = (event,index) => { //Once key is released move to next square
    event.target.value = event.target.value.toUpperCase(); //Automatically make each character uppercase like wordle 
    console.log(event.target.value);
    console.log(`Key pressed at ${index}:`, event.key); 
    if (isLetter(event.key) && index < inputRefs.current.length-1) {
      if(event.target.value.length > 0) {
        inputRefs.current[index + 1].focus(); //Dont skip characters if typing too fast
      }
      
    } else if(event.key === "Backspace" && index !== 0) {
      inputRefs.current[index-1].focus();
    }
    //  else if (index === 4 && event.key === "Enter" && inputRefs.current[index].value.length === 1) {
    //   // console.log("Submitting");
    // }
  } //Make each input into a react extended componenet? Need to somehow change style of inputs dynamically. Also need 6 more of the words, maybe create them dynamically.
  //Make sure word can be read after submit. Store word into list, prevent editing previous lineswhen enter is pressed
  return (
    <>
    {/* Create a function that returns forms that have 6 input fields all with the conditions below
        first make sure one word actually functions for all conditions, then make it work for 6 words
    */}
      <section id="game">
        <div id="words"> {/* first word*/}
          {/* do same thing for form that was done for input */}
          {[0].map((_,j) => (
            <form key={j} onSubmit={(e) => (handleSubmit(e))}> 
              {[0,1,2,3,4].map((_,i) => (
                <input key={i} type='text' maxLength={"1"} onChange={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[i] = e)} onKeyUp={(e) => handleKeyUp(e,i)}  />
                //Bug makes focus go to last line
                //Add word logic
              ))}
              {/* <input type = "text" name='1' id="first1" maxLength="1" onChange={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[0] = e)} onKeyUp={(e) => handleKeyUp(e,0)}></input> 
              <input type = "text" name='2' id="first2" maxLength="1" onChange={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[1] = e)} onKeyUp={(e) => handleKeyUp(e,1)}></input>
              <input type = "text" name='3' id="first3" maxLength="1" onChange={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[2] = e)} onKeyUp={(e) => handleKeyUp(e,2)}></input>
              <input type = "text" name='4' id="first4" maxLength="1" onChange={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[3] = e)} onKeyUp={(e) => handleKeyUp(e,3)}></input>
              <input type = "text" name='5' id="first5" maxLength="1" onChange={(e) => (lettersOnly(e.target))} ref={(e) => (inputRefs.current[4] = e)} onKeyUp={(e) => handleKeyUp(e,4)}></input> */}
              <input type="submit" hidden />
            </form>
          ))}
          
          
        </div>
      </section>
      {/* handle illegal characters * done */}
      {/* create enter key handler * done */}
      {/* check input value by input id like if first1.value === word[0] */}
      {/* Create a list/array that prevents writing duplicate words */}
      {/* check if word is in dictionary */}
      {/* dont understand useState and useEffect yet */}
      

    </>
  )
}

export default App
