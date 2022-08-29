import styled from "styled-components";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { Movie, Response } from "../../@types";
import fetcher from "../../services/fetcher";
import { tmdb } from "../../services/tmdbApi";
import BannerItem from "./BannerItem";

const BannerStyles = styled.div``;

const Banner = () => {
  const { data } = useSWR<Response<Movie>>(
    tmdb.getMovies("popular", 1),
    fetcher
  );
  if (!data) return null;

  return (
    <BannerStyles>
      <div className="container">
        <Swiper modules={[EffectFade]} effect="fade">
          {data &&
            data?.results?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <BannerItem {...movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </BannerStyles>
  );
};

export default Banner;
