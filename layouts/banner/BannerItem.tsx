import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Movie } from "../../@types";
import { tmdb } from "../../services/tmdbApi";

const BannerItemStyles = styled.div`
  box-sizing: border-box;
  position: relative;

  .container {
    position: relative;

    &::before {
      content: "";
      width: 100%;
      position: absolute;
      height: 100%;
      z-index: 1;
      pointer-events: none;
      background-image: linear-gradient(51deg, #111 0%, rgba(0, 0, 0, 0) 60%);
    }
    .image {
      height: auto !important;
    }
  }
`;

const BannerItem: React.FC<Movie> = (props) => {
  return (
    <BannerItemStyles>
      <div className="container">
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
    </BannerItemStyles>
  );
};

export default BannerItem;
