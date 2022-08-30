import styled from "styled-components";

interface StylesProps {
  maxWidth?: string;
  marginTop?: string;
}

export const MainLayout = styled.div<StylesProps>`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => props.maxWidth || "1280px"};
  margin-top: ${(props) => props.marginTop || "0"};
`;
