// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// // import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// import React from "react";
// import ReactDom from "react-dom";
// // import "./index.css";

// const Style = {
//   color: "red",
//   textAlign: "center",
// };

// const CurrentDate = new Date().toLocaleDateString();
// const CurrentTime = new Date().toLocaleTimeString();

// ReactDom.render(
//   <>
//     <h2 style={Style}>Today is {CurrentDate}</h2>
//     <h3 style={Style}>Current time is {CurrentTime}</h3>
//   </>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDom from "react-dom";

// const time = new Date();
// let hour = time.getHours();
// console.log(hour);
// let greet = "";
// if (hour >= 18 && hour <= 24) {
//   greet = "Night";
// } else if (hour >= 12 && hour <= 19) {
//   greet = "Afternoon";
// } else if (hour >= 1 && hour < 12) {
//   greet = "Morning";
// } else {
//   greet = "Evening";
// }
// ReactDom.render(
//   <>
//     <h1>Good {greet}, Sir</h1>
//   </>,
//   document.getElementById("root")
// );

// component tutorial 1
// import React from "react";
// import reactDom from "react-dom";
// import App from "./App";

// reactDom.render(<App />, document.getElementById("root"));

// // component tutorial 2
// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App";

// ReactDom.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// );

// // Netflix Series
// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./Card";
// import Sdata from "./Sdata";

// ReactDOM.render(
//   <>
//     {Sdata.map((value) => {
//       return (
//         <Card
//           key={value.id}
//           imgsrc={value.imgsrc}
//           category={value.category}
//           title={value.title}
//           href={value.href}
//         />
//       );
//     })}
//   </>,

//   document.getElementById("root")
// );

// Hoocks and clock, and digital clock concept in react
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
