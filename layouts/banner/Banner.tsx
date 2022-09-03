import styled from "styled-components";
import { Autoplay, EffectFade } from "swiper";
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
    tmdb.getMovies("now_playing", 1),
    fetcher
  );
  if (!data) return null;

  return (
    <BannerStyles>
      <div className="container">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          speed={1000}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}>
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
