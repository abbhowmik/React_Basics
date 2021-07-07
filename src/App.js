// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// // component 1
// import "./App.css";
// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App() {
//   return (
//     <>
//       <Heading />
//       <Para />
//       <List />
//       <Heading />
//     </>
//   );
// }

// export default App;

// // component 2
// import React from "react";
// import Greeting from "./Greeting";

// function App() {
//   return (
//     <>
//       <Greeting />
//     </>
//   );
// }

// export default App;

// // Hoocks Concept
// import React from "react";
// import "./index.css";
// import { useState } from "react";

// const App = () => {
//   const state = useState();
//   const [count, setCount] = useState(0);

//   const NumInc = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <div className="first">
//         <h1>{count}</h1>
//         <button onClick={NumInc}>Click Me</button>
//       </div>
//     </>
//   );
// };
// export default App;

// // clock using hoocks
// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//   let time = new Date().toLocaleTimeString();
//   const [cTime, updateTime] = useState(time);
//   const newTime = () => {
//     let updtTime = new Date().toLocaleTimeString();
//     updateTime(updtTime);
//   };

//   return (
//     <>
//       <div className="first">
//         <h1>{cTime}</h1>
//         <button onClick={newTime}>Get Time</button>
//       </div>
//     </>
//   );
// };
// export default App;

// Digital Automate clock using hoocks
import React, { useState } from "react";
import "./index.css";
const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, updateTime] = useState(time);
  const newTime = () => {
    let updtTime = new Date().toLocaleTimeString();
    updateTime(updtTime);
  };

  setInterval(newTime, 1000);

  return (
    <>
      <div className="first">
        <h1>{cTime}</h1>
      </div>
    </>
  );
};

export default App;
