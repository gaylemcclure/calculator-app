import React, { useState } from 'react'
import Button from './components/Button';

function App() {

  const [digits, setDigits] = useState({
    newNum: 0,
    prevNum: 0,
  });
  const [maths, setMaths] = useState({
    newMath: 0,
    prevMath: 0
  });
  const [total, setTotal] = useState(false)


  const numbers = [
  {
    id: "num7",
    value: 7, 
    numWord: "seven",
  },
  { 
    id: "num8",
    value: 8, 
    numWord: "eight"
  },
  { 
    id: "num9",
    value: 9, 
    numWord: "nine"
  },
  { 
    id: "num4",
    value: 4, 
    numWord: "four"
  },
  { 
    id: "num5",
    value: 5, 
    numWord: "five"
  },
  { 
    id: "num6",
    value: 6, 
    numWord: "six"
  },
  { 
    id: "num1",
    value: 1, 
    numWord: "one"
  },
  { 
    id: "num2",
    value: 2, 
    numWord: "two"
  },

  { 
    id: "num3",
    value: 3, 
    numWord: "three"
  },
  { 
    id: "num0",
    value: 0,
    numWord: "zero"
  }
];
  const makeButtons = numbers.map(number => (
    <Button key={number.id} number={number.value} value={number.value} click={handleNumberClick} class={`${number.numWord} number`}/>
  ))

  const mathButtons = [
    {
      id: "xx",
      value: "x",
      mathWord: "multiply"
    },
    {
      id: "++",
      value: "+",
      mathWord: "add"
    },
    {
      id: "--",
      value: "-",
      mathWord: "subtract"
    },
    {
      id: "//",
      value: "/",
      mathWord: "divide"
    }
  ];

  const makeMath = mathButtons.map(mathButton => (
    <Button key={mathButton.id} class={`${mathButton.mathWord} control`} value={mathButton.value} number={mathButton.value} click={handleMathClick} />
  ))

  function handleNumberClick(event) {
    let newDigits = event.target.value;
    setDigits(prevDigits => ({
      newNum: newDigits,
      prevNum: prevDigits.newNum
    }))
    console.log(digits)
  }

  function handleMathClick(event) {
    let newMaths = event.target.value
    setMaths(prevMaths => ({
      newMath: newMaths,
      prevMath: prevMaths.newMath
    }))
    console.log(maths)
  }

  function handleTotal() {
    if(maths.newMath === "+") {
      return (
        setTotal(parseInt(digits.prevNum, 10) + parseInt(digits.newNum, 10))
    )}
     else if(maths.newMath === "-") {
      return (
        setTotal(parseInt(digits.prevNum, 10) - parseInt(digits.newNum, 10))
    )}
    else if(maths.newMath === "x") {
      return (
        setTotal(parseInt(digits.prevNum, 10) * parseInt(digits.newNum, 10))
    )}
    else if(maths.newMath === "/") {
      return (
        setTotal(parseInt(digits.prevNum, 10) / parseInt(digits.newNum, 10))
    )}
  }



  return (
    <div className="App">
    <div className="container">
      <div className="total-container">
        <div className="total-wrapper" value={digits.newNum}>
          {total !== false ? total : digits.newNum}
        </div>
      </div>
      <div className="buttons-container">
        <div className="inner-container">
          {makeButtons}
          <Button class="total" number="=" click={handleTotal}/>
        </div>
        <div className="control-container">
          {makeMath}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
