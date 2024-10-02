import React, { useState, useEffect, useRef } from "react";
import down from "../icons_FEtask/down.svg";

const TopBar = ({ setGroupingAndOrdering }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGroupingChange = (event) => {
    const selectedOption = event.target.value;
    let optionValue;
    switch (selectedOption) {
      case "None":
        optionValue = 0;
        break;
      case "Status":
        optionValue = 1;
        break;
      case "User":
        optionValue = 2;
        break;
      case "Priority":
        optionValue = 3;
        break;
      default:
        optionValue = 0;
    }
    setGroupingAndOrdering(optionValue);
  };

  const handleOrderingChange = (event) => {
    const selectedOption = event.target.value;
    let optionValue;
    switch (selectedOption) {
      case "None":
        optionValue = 4;
        break;
      case "Priority":
        optionValue = 5;
        break;
      case "Title":
        optionValue = 6;
        break;
      default:
        optionValue = 4;
    }
    setGroupingAndOrdering(optionValue);
  };

  return (
    <div style={{ width: '100%', height: '50px', backgroundColor: 'rgb(204, 204, 204)', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: "relative", display: "inline-block", padding: '10px' }} ref={dropdownRef}>
        <div
          onClick={toggleDropdown}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid rgb(221, 221, 221)",
            padding: "8px 12px",
            borderRadius: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>Display</span>
            <div>
              <img src={down} alt="down" style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </div>
          </div>
        </div>

        {isDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "0",
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid rgb(221, 221, 221)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              width: "250px",
              zIndex: 1000,
            }}
          >
            <div style={{ padding: "10px", borderBottom: "1px solid rgb(221, 221, 221)", marginBottom: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ marginRight: "69px", color: "rgb(170, 170, 170)" }}>Grouping</label>
                <select
                  onChange={handleGroupingChange}
                  style={{
                    flex: 1,
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid rgb(221, 221, 221)",
                    backgroundColor: "rgb(249, 249, 249)",
                  }}
                >
                  <option>None</option>
                  <option>Status</option>
                  <option>User</option>
                  <option>Priority</option>
                </select>
              </div>
            </div>

            <div style={{ padding: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ marginRight: "69px", color: "rgb(170, 170, 170)" }}>Ordering</label>
                <select
                  onChange={handleOrderingChange}
                  style={{
                    flex: 1,
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid rgb(221, 221, 221)",
                    backgroundColor: "rgb(249, 249, 249)",
                  }}
                >
                  <option>None</option>
                  <option>Priority</option>
                  <option>Title</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
