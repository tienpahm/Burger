import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${(props) => (props.primary ? "blue" : "pink")};
  color: white;
  border: 2px solid white;
  font-size: ${(props) => (props.fontSizeX2 ? "2rem" : "0.5rem")};
  &:hover {
    background-color: black;
  }
`;

export const SmallButton = styled(Button)`
  background-color: orange;
  font-size: 0.5rem;
  padding: 0.5 rem;
`;
