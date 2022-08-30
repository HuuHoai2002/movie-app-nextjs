import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

interface StyledProps {
  gap?: number | string;
  padding?: number | string;
  className?: string;
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
}

const FlexStyles = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.gap + "px" || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const Flex = ({ children, ...props }: Props & StyledProps) => {
  return <FlexStyles {...props}>{children}</FlexStyles>;
};

export default Flex;
