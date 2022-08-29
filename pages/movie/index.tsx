import React from "react";
import useSwr from "swr";
import { Movie, Response } from "../../@types";
import fetcher from "../../services/fetcher";
import { tmdb } from "../../services/tmdbApi";

interface MoviePageProps {}

const MoviePage: React.FC<MoviePageProps> = () => {
  const { data } = useSwr<Response<Movie>>(
    tmdb.getMovies("popular", 1),
    fetcher
  );

  return (
    <div
      style={{
        height: "200vh",
      }}>
      <h1>Movie Page</h1>
    </div>
  );
};

export default MoviePage;
