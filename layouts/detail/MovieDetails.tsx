import React from "react";
import styled from "styled-components";
import Flex from "../../components/flex";

const MovieDetailsStyled = styled.div`
  .container {
    width: 100%;

    .background {
      width: 100%;
    }

    .content {
      width: 100%;
      flex: 1;

      .movie-title {
        font-size: 26px;
        font-weight: 500;
      }
    }
  }
`;

import Image from "next/image";
import { MovieDetail } from "../../@types/MovieDetail";
import { tmdb } from "../../services/tmdbApi";

const MovieDetails: React.FC<MovieDetail> = (props) => {
  console.log("🚀 ~ file: MovieDetails.tsx ~ line 9 ~ props", props);
  return (
    <MovieDetailsStyled>
      <Flex className="container" gap={20}>
        <div className="background">
          <Image
            src={tmdb.getImageUrl(props.backdrop_path, "original")}
            alt=""
            width="100%"
            height="60%"
            sizes="responsive"
            objectFit="cover"
            className="image"
          />
        </div>
        {/* <div className="content">
          <h1 className="movie-title">
            {props.title} ({props.release_date.split("-")[0]})
          </h1>
        </div> */}
      </Flex>
    </MovieDetailsStyled>
  );
};

export default MovieDetails;
