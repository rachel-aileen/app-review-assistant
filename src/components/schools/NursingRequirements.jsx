import React, { useState } from "react";

function NursingRequirements() {
  const [selectedMath, setSelectedMath] = useState("");
  const [selectedBio, setSelectedBio] = useState("");
  const [selectedChem, setSelectedChem] = useState("");

  const handleMathChange = (event) => {
    setSelectedMath(event.target.value);
  };

  const handleBioChange = (event) => {
    // Updated handler for bio selection
    setSelectedBio(event.target.value);
  };
  const handleChemChange = (event) => {
    setSelectedChem(event.target.value);
  };

  // Check if any requirement is "none"
  const hasIncompleteRequirements =
    selectedMath === "none" ||
    selectedBio === "none" ||
    selectedChem === "none";

  // Check if all requirements are completed (selected and not "none")
  const allRequirementsMet =
    selectedMath &&
    selectedMath !== "none" &&
    selectedBio &&
    selectedBio !== "none" &&
    selectedChem &&
    selectedChem !== "none";

  return (
    <div style={{ marginTop: "20px" }}>
      {/* ////////// MATH REQUIREMENT ////////// */}

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "5px" }}>Math Requirement</h3>
        <em
          style={{
            fontSize: "14px",
            color: "#666",
            display: "block",
            marginBottom: "10px",
          }}
        >
          Please select one of the following:
        </em>
        <div style={{ marginLeft: "20px" }}>
          <div>
            <input
              type="radio"
              id="threeYearsMath"
              name="mathRequirement"
              value="threeYearsMath"
              checked={selectedMath === "threeYearsMath"}
              onChange={handleMathChange}
            />
            <label htmlFor="MathThreeYears" style={{ marginLeft: "8px" }}>
              Three years of math (an average of a B- or better across all three
              years)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="calculus"
              name="mathRequirement"
              value="calculus"
              checked={selectedMath === "calculus"}
              onChange={handleMathChange}
            />
            <label htmlFor="calculus" style={{ marginLeft: "8px" }}>
              Calculus (at least one semester with a grade of B- or better,
              earned "pass" credit, or is currently in progress)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="apCalculus"
              name="mathRequirement"
              value="apCalculus"
              checked={selectedMath === "apCalculus"}
              onChange={handleMathChange}
            />
            <label htmlFor="apCalculus" style={{ marginLeft: "8px" }}>
              AP Calculus (at least one semester with a grade of C or better,
              earned "pass" credit, or is currently in progress)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="precalculus"
              name="mathRequirement"
              value="precalculus"
              checked={selectedMath === "precalculus"}
              onChange={handleMathChange}
            />
            <label htmlFor="precalculus" style={{ marginLeft: "8px" }}>
              Pre-Calculus (at least one semester with a grade of A- or better,
              earned "pass" credit, or is currently in progress)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="statistics"
              name="mathRequirement"
              value="statistics"
              checked={selectedMath === "statistics"}
              onChange={handleMathChange}
            />
            <label htmlFor="statistics" style={{ marginLeft: "8px" }}>
              Statistics (at least one semester with a grade of a B- or better,
              earned "pass" credit, or is currently in progress)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="none"
              name="mathRequirement"
              value="none"
              checked={selectedMath === "none"}
              onChange={handleMathChange}
            />
            <label htmlFor="none" style={{ marginLeft: "8px" }}>
              None of the above
            </label>
          </div>
        </div>
      </div>
      {/* ////////// BIOLOGY REQUIREMENT ////////// */}
      <div>
        <h3 style={{ marginBottom: "10px" }}>Biology Requirement</h3>
        <em
          style={{
            fontSize: "14px",
            color: "#666",
            display: "block",
            marginBottom: "10px",
          }}
        >
          Please select one of the following:
        </em>
        <div style={{ marginLeft: "20px" }}>
          <div>
            <input
              type="radio"
              id="biology"
              name="bioRequirement"
              value="biology"
              checked={selectedBio === "biology"}
              onChange={handleBioChange}
            />
            <label htmlFor="biology" style={{ marginLeft: "8px" }}>
              Biology (one year completed, with at least a B- or better for both
              semesters)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="apBiology"
              name="bioRequirement"
              value="apBiology"
              checked={selectedBio === "apBiology"}
              onChange={handleBioChange}
            />
            <label htmlFor="apBiology" style={{ marginLeft: "8px" }}>
              AP Biology (one year completed, with at least a C or better for
              both semesters)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="noBio"
              name="bioRequirement"
              value="none"
              checked={selectedBio === "none"}
              onChange={handleBioChange}
            />
            <label htmlFor="noBio" style={{ marginLeft: "8px" }}>
              None of the above
            </label>
          </div>
        </div>
      </div>

      {/* ////////// CHEMISTRY REQUIREMENT ////////// */}
      <div>
        <h3 style={{ marginBottom: "10px" }}>Chemistry Requirement</h3>
        <em
          style={{
            fontSize: "14px",
            color: "#666",
            display: "block",
            marginBottom: "10px",
          }}
        >
          Please select one of the following:
        </em>
        <div style={{ marginLeft: "20px" }}>
          <div>
            <input
              type="radio"
              id="chemistry"
              name="chemRequirement"
              value="chemistry"
              checked={selectedChem === "chemistry"}
              onChange={handleChemChange}
            />
            <label htmlFor="chemistry" style={{ marginLeft: "8px" }}>
              Chemistry (one year completed, with at least a B- or better
              overall average across both semesters)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="apChemistry"
              name="chemRequirement"
              value="apChemistry"
              checked={selectedChem === "apChemistry"}
              onChange={handleChemChange}
            />
            <label htmlFor="apChemistry" style={{ marginLeft: "8px" }}>
              AP Chemistry (one year completed, with at least a C or better
              overall average across both semesters)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="none"
              name="chemRequirement"
              value="none"
              checked={selectedChem === "none"}
              onChange={handleChemChange}
            />
            <label htmlFor="none" style={{ marginLeft: "8px" }}>
              None of the above
            </label>
          </div>
        </div>
      </div>

      {/* Show hold message if any requirement is "none" and at least one selection has been made */}
      {hasIncompleteRequirements &&
        (selectedMath || selectedBio || selectedChem) && (
          <div
            style={{
              marginTop: "30px",
              padding: "15px",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeeba",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                marginBottom: "8px",
                color: "#856404",
              }}
            >
              <b>Admissions Decision:</b> Hold
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#856404",
              }}
            >
              <b>Next Bin:</b> Hold
            </div>
          </div>
        )}

      {/* START BELOW THIS LINE */}
      {/* Show admission status based on conditions */}
      {allRequirementsMet && (
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            backgroundColor: allRequirementsMet ? "#d4edda" : "#fff3cd",
            border: `1px solid ${allRequirementsMet ? "#c3e6cb" : "#ffeeba"}`,
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              marginBottom: "8px",
              color: allRequirementsMet ? "#155724" : "#856404",
            }}
          >
            <b>Admissions Decision:</b> {allRequirementsMet ? "Admit" : "Hold"}
          </div>
          <div
            style={{
              fontSize: "16px",
              color: allRequirementsMet ? "#155724" : "#856404",
            }}
          >
            <b>Next Bin:</b> {allRequirementsMet ? "Read 2" : "Hold"}
          </div>
        </div>
      )}
    </div>
  );
}

export default NursingRequirements;
