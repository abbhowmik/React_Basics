import React from "react";

const time = new Date();
let hour = time.getHours();
let greet = "";
if (hour >= 18 && hour <= 24) {
  greet = "Night";
} else if (hour >= 12 && hour <= 19) {
  greet = "Afternoon";
} else if (hour >= 1 && hour < 12) {
  greet = "Morning";
} else {
  greet = "Evening";
}
function Greeting() {
  return (
    <>
      <h1>Good {greet}, Sir!</h1>
    </>
  );
}
export default Greeting;
