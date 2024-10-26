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
    { value: "below2.5", label: "Below 2.3" },
  ];

  const showRequirements =
    selectedMajor === "optionNursing" && selectedGPA === "3.5-5.0";

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

        {showRequirements && <NursingRequirements />}
      </div>
    </div>
  );
}

export default App;
