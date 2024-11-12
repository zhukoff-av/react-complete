import React from "react";

const Card = ({ number }) => {
  return (
    <div className="bg-gray-200 p-4 m-2 rounded shadow-md">
      <h3>Card {number}</h3>
    </div>
  );
};

export default Card;