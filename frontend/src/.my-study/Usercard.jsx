import { useState } from "react";

const UserCard = (props) => {
  const [use, setUse] = useState(true);

  function toggle() {
    setUse((prev) => !prev);
  }

  return (
    <div className="container">
      <div className="card flex flex-col text-black">
        <div>name: {props.name}</div>
        <div>age: {props.age}</div>

        {use && <div>Extra info goes here!</div>}

        <button onClick={toggle} className="btn mt-auto mx-auto">
          {use ? "See More" : "Hide"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;