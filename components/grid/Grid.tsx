import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

interface StyledProps {
  col?: number | string;
  gap?: number | string;
  padding?: number | string;
  className?: string;
}

const GridStyles = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col || 1}, 1fr);
  gap: ${(props) => props.gap + "px" || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const Grid = ({ children, ...props }: Props & StyledProps) => {
  return <GridStyles {...props}>{children}</GridStyles>;
};

export default Grid;
