import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 383px;
  height: 40px;

  background: #ffffff;

  margin: 100px auto;
`;

export const DropDownHeader = styled("div")`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #999999;

  padding: 13px 16px;

  width: 383px;
  height: 40px;

  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 8px;

  margin-bottom: 16px;

  :hover {
    cursor: pointer;
  }
`;

export const DropDownListContainer = styled("div")`
  border-radius: 8px;
`;

export const DropDownList = styled("ul")`
  width: 384px;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 9999;

  background: #fff;

  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 8px;

  :hover {
    cursor: pointer;
  }
`;

export const ListItem = styled("li")`
  list-style: none;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #999999;

  border-radius: ${(props) =>
    (props.isFirst && "8px 8px 0 0") || (props.isLast && "0 0 8px 8px")};
  padding: 13px 16px;

  :hover {
    background: #2328eb;
    cursor: pointer;
  }
`;
