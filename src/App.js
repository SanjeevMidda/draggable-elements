import "./index.css";
import { motion } from "framer-motion";
import Circle from "./components/Circle";

function App() {
  let colors = ["blue,", "red", "orange", "purple", "green", "pink", "grey"];

  let randomColor = () => {
    let colorOne = Math.floor(Math.random() * 255);
    let colorTwo = Math.floor(Math.random() * 255);
    let colorThree = Math.floor(Math.random() * 255);

    return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
  };

  let noOfCircles = [];

  for (let index = 0; index < 56; index++) {
    noOfCircles.push(<Circle color={randomColor()} />);
  }

  return (
    <div className="App">
      <motion.h1 drag>bubbles</motion.h1>
      <div className="circleContainer">
        {noOfCircles.map((item) => {
          return item;
        })}
      </div>
    </div>
  );
}

export default App;
