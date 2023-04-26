import logo from './logo.svg';
import './App.css';
import StaffList from './StaffList'
import { useState, useEffect } from "react";
function App() {
  // const [x, setX] = useState(0);
  // const handle_increase = () => {
  //   setX(pre => pre + 1);
  //   setX(pre => pre + 1);
  // }
  // const [text, setText] = useState("Animal")
  // const handle_Change_Text = (e) => {
  //   e.preventDefault();
  //   setText(Name);
  //   setName("")
  //   setStaff((pre) => ({ ...pre, name: Name }));
  // }
  // const [Name, setName] = useState("")
  // const handle_Change_Name = (e) => {
  //   setName(e.target.value)
  // }
  // const [check, setCheck] = useState(true);
  // const handle_toggle_staff = () => {
  //   setCheck((pre) => !pre);
  // }
  // const [Staff, setStaff] = useState({
  //   name: "Tran Duy Nam", old: 5,
  // })
  // return (
  //   <div>
  //     <h2>Hello World</h2>
  //     <p>{x}</p>
  //     <h1>{text}</h1>
  //     <h1>Full Name: {Staff["name"]}, Old: {Staff.old}</h1>
  //     <form onSubmit={handle_Change_Text}>
  //       <input type="text" placeholder="Name" value={Name} onChange={handle_Change_Name} />
  //     </form>
  //     <button onClick={handle_increase}>increase</button>
  //     <button onClick={handle_Change_Text}>Change Text</button>
  //     <button onClick={handle_toggle_staff}>Toggle Staff</button>

  //     {check ? <StaffList /> : ""}
  //   </div>
  // );
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [kq, setKQ] = useState()
  const handle_plus = () => {
    setKQ(Number(a) + Number(b));
    setCalc(a + "+" + b);
  }
  const handle_minus = () => {
    setKQ(Number(a) - Number(b));
    setCalc(a + "-" + b);
  }
  const handle_multiply = () => {
    setKQ(Number(a) * Number(b));
    setCalc(a + "*" + b);
  }
  const handle_divide = () => {
    setKQ(Number(a) / Number(b));
    setCalc(a + "/" + b);
  }
  const handle_value_A = (e) => {
    setA(e.target.value)
  }
  const handle_value_B = (e) => {
    setB(e.target.value)
  }
  const [calc, setCalc] = useState("")
  return (
    <div id='container'>
      <div className='cal'>
        <h1>ReactJS Calculation</h1>
        <input type="text" placeholder='Input a' value={a} onChange={handle_value_A} />
        <input type='text' placeholder='Input b' value={b} onChange={handle_value_B} />
        <p>Calculation: {calc}</p>
        <button onClick={handle_plus}>Plus</button>
        <button onClick={handle_minus}>Minus</button>
        <button onClick={handle_multiply}>Multiply</button>
        <button onClick={handle_divide}>Divide</button>
        <h2>Result= {kq}</h2>
      </div>
    </div>
  )
}

export default App;
