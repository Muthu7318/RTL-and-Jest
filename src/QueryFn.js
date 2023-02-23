import React from "react";
import { useState } from "react";

function QueryFn(props) {
  return (
    <ul>
      <li>Red</li>
      <li>Blue</li>
      <li>Green</li>
    </ul>
  );
}

export function DataForm() {
  const [email, setEmail] = useState("test@test.com");

  return (
    <form>
      <h3>Enter Data</h3>
      <div data-testid="image wrapper">
        <img alt="data" src="data.jpg"></img>
      </div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="color">Color</label>
      <input id="color" placeholder="Red"></input>
      <button title="Click when ready to submit">Submit</button>
    </form>
  );
}

export default QueryFn;
