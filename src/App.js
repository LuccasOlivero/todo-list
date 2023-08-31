// import { useState } from "react";

import { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

// function App() {
//   return (
//     <div>
//       <TipCalculator />
//     </div>
//   );
// }

// export default App;

// function TipCalculator() {
//   const [bill, setBill] = useState("");
//   const [ownTip, setOwnTip] = useState(0);
//   const [friendTip, setFriendTip] = useState(0);

//   return (
//     <div>
//       <Bill setBill={setBill} />
//       <SelectPercentaje setOwnTip={setOwnTip}>
//         how did you like the service
//       </SelectPercentaje>
//       <SelectPercentaje setOwnTip={setFriendTip}>
//         how did your friend like the service
//       </SelectPercentaje>
//       <Ouput bill={bill} ownTip={ownTip} friendTip={friendTip} />
//       <Reset
//         setBill={setBill}
//         setOwnTip={setOwnTip}
//         setFriendTip={setFriendTip}
//       />
//     </div>
//   );
// }

// function Bill({ setBill }) {
//   function handleBill(e) {
//     // e.preventDefault();
//     setBill(e);
//   }
//   return (
//     <div>
//       <label>how much was the bill ?</label>
//       <input
//         type="text"
//         placeholder="bill value"
//         onChange={(e) => handleBill(e.target.value)}
//       />
//     </div>
//   );
// }
// function SelectPercentaje({ children, setOwnTip }) {
//   function handleOption(e) {
//     setOwnTip(+e);
//   }

//   return (
//     <div>
//       <label>{children}</label>
//       <select onChange={(e) => handleOption(e.target.value)}>
//         <option value="0">Dissatisfied</option>
//         <option value="5">It was ok</option>
//         <option value="10">It was good</option>
//         <option value="20">Amazing</option>
//       </select>
//     </div>
//   );
// }

// function Ouput({ bill, ownTip, friendTip }) {
//   const result = bill * (ownTip / 100) + bill * (friendTip / 100);

//   return (
//     <h3>
//       you pay {result + bill} (${bill} + ${ownTip}tip)
//     </h3>
//   );
// }
// function Reset({ setBill, setOwnTip, setFriendTip }) {
//   function handleReset() {
//     setBill("");
//     setOwnTip(0);
//     setFriendTip(0);
//   }

//   return <button onClick={handleReset}>Reset</button>;
// }
// ---------------- tip calculator ----------------

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [tasks, setTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTask(() => [...tasks, newTodo]);
    setNewTodo("");
  }

  return (
    <div className="container">
      <h2>To-do List</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={newTodo}
          type="text"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
      {tasks.map((task, i) => (
        <div key={i} className="list">
          <input type="checkbox" />
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}
