import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Main(props) {
  // write code below this line
  const [text, updateText] = useState("");
  // write code above this line

  let handleChange = (e) => {
    // write code below this line
    updateText(e.target.value);
    // write code above this line
  };

  return (
    <form>
      <label>Type something: </label>
      <input value={text} onChange={handleChange} />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
