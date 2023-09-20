import "./input.css";
import { useState } from "react";

export default function Input(props) {
  // Destructuring

  const { hasCPf, setHasCPF, placeholder, isUserFound, setIsUserFound } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove todos os não dígitos
    console.log(value);
    if (value.length <= 11) {
      setIsUserFound(false);
      setHasCPF(false);
      // Formate o CPF
      setInputValue(
        value
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{2})$/, "$1-$2")
      );
    }

    if (value.length === 11 && value === "11111111111") {
      setIsUserFound(true);
      setHasCPF(true);
    }
  };

  return (
    <>
      <label name="input">CPF:</label>
      <input
        id="input"
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={inputValue}
      />
    </>
  );
}
