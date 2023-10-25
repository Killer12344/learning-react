import React, { useEffect } from "react";

const Input = ({ name, change, value }) => {
  const handleChange = (event) => {
    change({ name: event.target.name, value: event.target.value });
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      name={name}
      value={value}
      className="input-field"
    />
  );
};

export default Input;
