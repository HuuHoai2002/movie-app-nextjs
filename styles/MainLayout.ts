import styled from "styled-components";

interface StylesProps {
  maxWidth?: string;
}

export const MainLayout = styled.div<StylesProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => props.maxWidth || "1280px"};
`;
