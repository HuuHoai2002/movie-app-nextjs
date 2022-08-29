import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

const DefaultLayoutStyles = styled.div``;

const DefaultLayout = ({ children }: Props) => {
  return (
    <DefaultLayoutStyles>
      <Header />
      <Head>
        <title>Movie App With NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </DefaultLayoutStyles>
  );
};

export default DefaultLayout;
