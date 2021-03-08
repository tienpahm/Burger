import styled from "styled-components";
import React from "react";

export const TextField = styled.input`
  color: ${(props) => props.inputColor || "red"};
  background-color: pink;
`;
