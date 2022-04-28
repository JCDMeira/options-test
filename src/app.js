import styled from "styled-components";

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 383px;
  height: 40px;

  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 8px;

  .option {
    padding: 0 30px 0 10px;
    min-height: 38px;
    display: flex;
    align-items: center;
    background: #fff;
    position: absolute;
    top: 0;
    width: 100%;
    pointer-events: none;
    order: 2;
    z-index: 1;
    transition: background 0.4s ease-in-out;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;

    font-size: 12px;
    line-height: 14px;

    color: #999999;

    border-radius: 8px;
  }

  .option:hover {
    background: #2328eb;
  }

  .select:focus .option {
    position: relative;
    pointer-events: all;
  }

  input {
    opacity: 0;
    position: absolute;
    left: -99999px;
  }

  input:checked + label {
    order: 1;
    z-index: 2;
    background: #fff;
    border-top: none;
    position: relative;
    color: #999999;
  }

  input:checked + label:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #999;
    position: absolute;
    right: 10px;
    top: calc(50% - 2.5px);
    pointer-events: none;
    z-index: 3;
  }

  input:checked + label:before {
    position: absolute;
    right: 0;
    height: 40px;
    width: 40px;
    content: "";
    background: transparent;
  }
`;