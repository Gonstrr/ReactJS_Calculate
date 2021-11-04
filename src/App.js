import './App.css';
import React, {useState} from "react";

function App() {
  //almacena el numero 
  const [number1 , setNumber1] = useState("");
  //almaecna el numero 2 que se refleja por pantalla
  const [number2,  setNumber2] = useState("");
  //almacena la operaciones dentro de la calculadora 
  const [currentOperation, setCurrentOperaton] = useState("");
  //se almacena una variable para el restulado.
  const [result , setResult ] = useState(0);



  // esta funcion recibe el valor que teclea el usuario y se le asigna a esta funcion.
  function clickNumber(val){
    if(currentOperation === ""){
      setNumber1(number1 + val)
    }
    else {
      setNumber2(number2 + val);
    }
  }

  //modifica las operaciones dentro de la calculadora 
  function clickOperations (val){
    setCurrentOperaton(val);
  }
  //modifica el campo output cuando tenga una operacion y la borra y deja los paremtros vacios.
  function allClear(){
    setNumber1("");
    setNumber2("");
    setCurrentOperaton("");
    setResult("");
  }

  function getResult(){
    // eslint-disable-next-line default-case
    switch(currentOperation){
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "*":
        setResult(Number(number1) * Number(number2));
        break;
      case "/":
        setResult(Number(number1) / Number(number2));
        break;
    }
  }


  return (
    <div className="App">
      <h1>Calculadora ACL </h1>
      <div className="calculator-grid">
        <div className="output">
          <div className="previus-operand">{currentOperation ? number1 + currentOperation : ""} </div>  
          <div className="current-operand">{result ? result :(!currentOperation ? number1 : number2)} </div>
        </div>
        <button onClick={allClear} className="span-two">AC</button>
        <button onClick={() => {} }>DEL</button>
        <button onClick={() => {clickOperations("/")} }>/</button>
        <button onClick={() => { clickNumber(7)}}>7</button>
        <button onClick={() => {clickNumber(8)} }>8</button>
        <button onClick={() => {clickNumber(9)}}>9</button>
        <button onClick={() => {clickOperations("*") } }>*</button>
        <button onClick={() => {clickNumber(4)}}>4</button>
        <button onClick={() => {clickNumber(5)} }>5</button>
        <button onClick={() => {clickNumber(6)} }>6</button>
        <button onClick={() => {clickOperations("+") } }>+</button>
        <button onClick={() => {clickNumber(1)}  }>1</button>
        <button onClick={() => {clickNumber(2)} }>2</button>
        <button onClick={() => {clickNumber(3)} }>3</button>
        <button onClick={() => {clickOperations("-") } }>-</button>
        <button onClick={() => {clickNumber(".") } }>.</button>
        <button onClick={() => {clickNumber(0)} }>0</button>
        <button onClick={getResult} className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
