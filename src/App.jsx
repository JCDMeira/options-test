import React, { useState } from "react";
import DropDownSelect from "./components/DropDownSelect";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("Batata");
  const options = ["Batata", "Batata frita", "Batata quente", "Batata Assada"];

  return (
    <DropDownSelect
      initialOption={selectedOption}
      allOptions={options}
      setOption={setSelectedOption}
    />
  );
}
