import React from "react";

function AccessibleName(props) {
  return (
    <div>
      <button>Submit</button>
      <button>Cancel</button>

      <label htmlFor="email">Email</label>
      <input id="email" />

      <label htmlFor="search">Search</label>
      <input id="search" />

      <button aria-label="icon1">
        <svg></svg>
      </button>
      <button aria-label="icon2">
        <svg></svg>
      </button>
    </div>
  );
}

export default AccessibleName;
