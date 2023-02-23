import { useState } from "react";
import RoleExample from "./RoleExample";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const handleUserAdd = (name, email) => {
    setUsers([...users, { name, email }]);
  };

  return (
    <div>
      {/* <UserForm onUserAdd={handleUserAdd}></UserForm>
      <hr></hr>
      <UserList users={users}></UserList> */}
      <RoleExample></RoleExample>
    </div>
  );
}

export default App;
