import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

const DefaultLayoutStyles = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const DefaultLayout = ({ children }: Props) => {
  return (
    <DefaultLayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </DefaultLayoutStyles>
  );
};

export default DefaultLayout;
