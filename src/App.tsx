import { useState } from "react";
import "./App.css";
import RandomFact from "./components/RandomFact";
import GetFact from "./components/GetFact";

/***** Get a random fact from an API   *****/
// api - https://uselessfacts.jsph.pl/api/v2/facts/random?language=en

/****Plan****/
//1. x get data from api
//2. x print data out to console
//3. x output/display data on the screen
//4. x create a button to get data
//5. x output the fethced data
//6. get and output data i different components
//7. use redux to save data (fact state)
//8. fixa typer and file manager

/* REDUX */
//10. reducer and actions (sloce)
//11. store

function App() {
  //const [randomFact, setRandomFact] = useState<string>("");

  //fetchFact(setRandomFact);

  return (
    <>
      <h1>Get a fact! 😎</h1>
      {/* <button onClick={() => fetchFact(setRandomFact)}>Get fact!</button> */}
      <GetFact />
      <RandomFact />
    </>
  );
}

//fetch function
/* async function fetchFact(
  setRandomFact: React.Dispatch<React.SetStateAction<string>>
) {
  const URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

  const response = await fetch(URL);
  const json = await response.json();
  const randomFact = json.text;

  console.log(randomFact);
  setRandomFact(randomFact);
} */

export default App;
