import Image from "next/image";
import styled from "styled-components";
import { Movie } from "../../@types";
import { tmdb } from "../../services/tmdbApi";

const MovieItemStyles = styled.div`
  width: 100%;
  height: 100%;

  .image {
    border-radius: 5px;

    &:hover {
    }
  }
`;
const MovieItem = (props: Movie) => {
  return (
    <MovieItemStyles>
      <Image
        src={tmdb.getImageUrl(props.poster_path, "w500")}
        alt=""
        width="100%"
        height="140%"
        sizes="responsive"
        objectFit="cover"
        className="image"
      />
    </MovieItemStyles>
  );
};

export default MovieItem;
