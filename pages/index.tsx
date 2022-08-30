import type { NextPage } from "next";
import styled from "styled-components";
import Banner from "../layouts/banner";
import { MovieList } from "../layouts/movie";
import { MainLayout } from "../styles/MainLayout";

const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Home: NextPage = () => {
  return (
    <HomeStyles>
      <Banner></Banner>
      <MainLayout>
        <MovieList></MovieList>
      </MainLayout>
    </HomeStyles>
  );
};

export default Home;
