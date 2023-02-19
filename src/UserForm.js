import React, { useState } from "react";

function UserForm({ onUserAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserAdd(name, email);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={handleNameChange}></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={handleEmailChange}></input>
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
