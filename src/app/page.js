"use client";
import React, { useState } from "react";
import GeneratePassword from "./GeneratePassword";
const Home = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [uppercase, SetUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const handleRange = (e) => {
    setLength(Number(e.target.value));
  };

  const handleGeneratePass = () => {
    const generatedPassword = GeneratePassword(
      length,
      uppercase,
      numbers,
      symbols
    );
    setPassword(generatedPassword);
    navigator.clipboard.writeText(generatedPassword);
    CalcPasswordStrength(generatedPassword);
  };

  const handleFilter = (e) => {
    const { name, checked } = e.target;

    if (name === "uppercase") {
      SetUppercase(checked);
    } else if (name === "numbers") {
      setNumbers(checked);
    } else if (name === "symbols") {
      setSymbols(checked);
    }
  };

  const CalcPasswordStrength = (password) => {
    const checkUppercase = /[A-Z]/.test(password);
    const checkLowercase = /[a-z]/.test(password);
    const checkNumber = /\d/.test(password);
    const checkSymbol = /[!@#$%^&*()]/.test(password);
    const minLength = 8;

    let strength = 0;

    if (password.length >= minLength) {
      strength++;
    }
    if (checkUppercase) {
      strength++;
    }
    if (checkLowercase) {
      strength++;
    }
    if (checkNumber) {
      strength++;
    }
    if (checkSymbol) {
      strength++;
    }

    setPasswordStrength(strength);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="main_container">
      <div className="parent_div">
        <h3>Password Generator</h3>
        <div className="pass_copy">
          <p>{password || "Genreate Password"}</p>
          <i
            className={`fas fa-copy cpysvg ${isCopied ? "copied" : ""}`}
            onClick={handleCopyPassword}
          ></i>
          {isCopied && <span className="tooltip">Copied!</span>}
        </div>
        <div className="secodnchild">
          <div className="char_len">
            <p>character length</p>
            <p>{length}</p>
          </div>
          <div className="range">
            <input
              type="range"
              min="6"
              max="15"
              className="rangeinput"
              value={length}
              onChange={handleRange}
            />
          </div>
          <div className="filter">
            <div>
              <input
                type="checkbox"
                name="uppercase"
                checked={uppercase}
                onChange={handleFilter}
              />
              <span>include uppercase letter</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="numbers"
                checked={numbers}
                onChange={handleFilter}
              />
              <span>include number</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="symbols"
                checked={symbols}
                onChange={handleFilter}
              />
              <span>include symbols</span>
            </div>
          </div>
          <div className="strength">
            <p>strength</p>
            <div className="strenghcheck">
              <span
                style={{
                  backgroundColor:
                    passwordStrength >= 1 ? "green" : "transparent",
                }}
              ></span>
              <span
                style={{
                  backgroundColor:
                    passwordStrength >= 2 ? "green" : "transparent",
                }}
              ></span>
              <span
                style={{
                  backgroundColor:
                    passwordStrength >= 3 ? "green" : "transparent",
                }}
              ></span>
              <span
                style={{
                  backgroundColor:
                    passwordStrength >= 4 ? "green" : "transparent",
                }}
              ></span>
              <span
                style={{
                  backgroundColor:
                    passwordStrength >= 5 ? "green" : "transparent",
                }}
              ></span>
            </div>
          </div>
          <button className="generate" onClick={handleGeneratePass}>
            Generate
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
