import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import NursingRequirements from "./components/schools/NursingRequirements";
import "./App.css";

function App() {
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedGPA, setSelectedGPA] = useState("");

  const majorOptions = [
    { value: "option", label: "Accounting" },
    { value: "optionCOTA", label: "Acting for the Stage and Screen" },
    { value: "optionHealth", label: "Allied Health" },
    { value: "optionHealth", label: "Biological Sciences" },
    { value: "optionNursing", label: "Nursing" },
  ];

  const gpaOptions = [
    { value: "3.5-5.0", label: "3.5+" },
    { value: "3.0-3.49", label: "3.0-3.49" },
    { value: "2.5-2.99", label: "2.5-2.99" },
    { value: "2.3-2.49", label: "2.3-2.49" },
    { value: "below2.3", label: "Below 2.3" },
  ];

  // Check if GPA is 2.3 or below
  const isLowGPA = selectedGPA === "below2.3";

  return (
    <div className="App">
      <div style={{ padding: "20px" }}>
        <Dropdown
          label="Major/Program"
          options={majorOptions}
          value={selectedMajor}
          onChange={(e) => setSelectedMajor(e.target.value)}
        />
        <Dropdown
          label="GPA (Weighted 10-12th)"
          options={gpaOptions}
          value={selectedGPA}
          onChange={(e) => setSelectedGPA(e.target.value)}
        />

        {/* Show Nursing Requirements only if it's Nursing major with 3.5+ GPA */}
        {selectedMajor === "optionNursing" && selectedGPA === "3.5-5.0" && (
          <NursingRequirements />
        )}

        {/* Show Deny message if GPA is 2.3 or below */}
        {isLowGPA && selectedMajor && (
          <div
            style={{
              marginTop: "30px",
              padding: "15px",
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                marginBottom: "8px",
                color: "#721c24",
              }}
            >
              <b>Admissions Decision:</b> Deny
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#721c24",
              }}
            >
              <b>Next Bin:</b> Deny
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
