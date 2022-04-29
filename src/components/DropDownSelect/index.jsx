import React, { useState } from "react";
import * as S from "./style";

function DropDownSelect({ initialOption, allOptions, setOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setOption(value);
    setIsOpen(false);
    console.log(value);
  };

  return (
    <S.DropDownContainer>
      <S.DropDownHeader onClick={toggling}>{initialOption}</S.DropDownHeader>
      {isOpen && (
        <S.DropDownListContainer>
          <S.DropDownList>
            {allOptions.map((option, index) => (
              <S.ListItem onClick={onOptionClicked(option)} key={index}>
                {option}
              </S.ListItem>
            ))}
          </S.DropDownList>
        </S.DropDownListContainer>
      )}
    </S.DropDownContainer>
  );
}

export default DropDownSelect;
