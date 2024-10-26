import React from "react";

function Dropdown({ label, options, value, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "15px",
      }}
    >
      <label htmlFor={`${label}-select`}>{label}:</label>
      <select
        id={`${label}-select`}
        value={value}
        onChange={onChange}
        style={{
          padding: "5px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
