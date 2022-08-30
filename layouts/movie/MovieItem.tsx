import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
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
      <Link
        href={`/movie/${slugify(props.title, {
          lower: true,
          locale: "vi",
        })}?id=${props.id}`}>
        <a>
          <Image
            src={tmdb.getImageUrl(props.poster_path, "w500")}
            alt=""
            width="100%"
            height="140%"
            sizes="responsive"
            objectFit="cover"
            className="image"
          />
        </a>
      </Link>
    </MovieItemStyles>
  );
};

export default MovieItem;
