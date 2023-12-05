import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count] = useState(0);

  return (
    <>
      <div className="user-card">
        <p>From Function</p>
        <h3>Count: {count}</h3>
        <h3>Name: {name} </h3>
        <h3> Address: Subhashis</h3>
        <h3>Contact: Subhashis</h3>
      </div>
    </>
  );
};

export default User;
