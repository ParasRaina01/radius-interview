import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const clicked = []
const  BoxComponent = ({onClick,id}) => {
  
  return (
    <div id= {clicked.includes(id) ? "box-clicked"  : "box"} onClick={onClick} >
      
    </div>
  )
}
const  changeColor = (id) => {
  // isAlreadyAdded =
  if(clicked.includes(id))
    return;
  clicked.push(id);
  

}

const arr = [[1,2,3],[1,2,3],[1,2,3]];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="parent-div">
        <div id="top-div">
        <BoxComponent id="1" onClick = {(e) => {changeColor("1")}} />
        <BoxComponent id="2" onClick = {(e) => {changeColor("2")}} />
        <BoxComponent id="3" onClick = {(e) => {changeColor("3")}} />
        </div>
        <BoxComponent id="4" onClick = {(e) => {changeColor("4")}} />
        <div id="top-div">
        <BoxComponent id="5" onClick = {(e) => {changeColor("5")}} />
        <BoxComponent id="6" onClick = {(e) => {changeColor("6")}}/>
        <BoxComponent id="7" onClick = {(e) => {changeColor("7")}} />
        </div>
        {/* {arr.map((x, index) => {
            <BoxComponent key={index } /> 
          })} */}
      </div>
    </>
  )
}

export default App
