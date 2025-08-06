import React from "react";

const She = () => {
  const [isGoingout, setIsGoingOut] = React.useState(false);

  function changeMind() {
    setIsGoingOut((prev) => !prev);
  }

  return (
    <div className="add-in">
      <button onClick={changeMind}>{isGoingout ? "Yes" : "No"}</button>
    </div>
  );
};

export default She;
