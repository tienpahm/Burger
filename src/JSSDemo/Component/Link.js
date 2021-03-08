import styled from "styled-components";
import React from "react";

export const Link = ({className, children, ...restProps}) => {
  return (
    <a className={className} {...restProps}>
      {children}
    </a>
  );
};

export const StyledLink = styled(Link)`
  background-color: limegreen;
  font-weight: bold;
  color: white !important;
`;
