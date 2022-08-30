/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { Movie, Response } from "../../@types";
import { useIntersectionObserver } from "../../hooks";
import { tmdb } from "../../services/tmdbApi";
import MovieItem from "./MovieItem";

const MovieListStyles = styled.div`
  width: 100%;
  height: 100vh;

  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: ${(props) => props.theme.white};
  }

  .movie-list {
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;

    .loading {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      margin-bottom: 25px;
      color: ${(props) => props.theme.white};
      font-size: 14px;
    }
  }
`;

const MovieList = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    // const abortController = new AbortController();
    const fetchData = async () => {
      const response = await axios.get<Response<Movie>>(
        tmdb.getMovies("popular", page)
      );
      setMovies([...movies, ...response.data.results]);
    };
    fetchData();
    // return () => {
    //   abortController.abort();
    // };
  }, [page]);

  React.useEffect(() => {
    if (isVisible) {
      setPage((page) => page + 1);
    }
  }, [isVisible]);

  return (
    <MovieListStyles>
      <h1 className="title">Popular Movie</h1>

      <div className="movie-list">
        {movies &&
          movies?.map((movie) => <MovieItem key={movie.id} {...movie} />)}
      </div>
      {isVisible ? (
        <div className="loading">Loading...</div>
      ) : (
        <div ref={ref}></div>
      )}
    </MovieListStyles>
  );
};

export default MovieList;
