import React, { useState } from "react";
import * as S from "./app";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Batata");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption, value);
  };

  const options = ["Batata", "Batata frita", "Batata quente", "Batata Assada"];

  return (
    <>
      <S.DropDownContainer>
        <S.DropDownHeader onClick={toggling}>
          {selectedOption || "Batata"}
        </S.DropDownHeader>
        {isOpen && (
          <S.DropDownListContainer>
            <S.DropDownList>
              {options.map((option, index) => (
                <S.ListItem onClick={onOptionClicked(option)} key={index}>
                  {option}
                </S.ListItem>
              ))}
            </S.DropDownList>
          </S.DropDownListContainer>
        )}
      </S.DropDownContainer>
    </>
  );
}
