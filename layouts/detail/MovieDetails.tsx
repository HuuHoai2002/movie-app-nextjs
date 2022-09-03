import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { MovieDetail } from "../../@types/MovieDetail";
import FieldMeta from "../../components/field";
import { tmdb } from "../../services/tmdbApi";

const MovieDetailsStyles = styled.div`
  position: relative;

  .backdrop {
    position: relative;
    width: 100%;
    z-index: -1;

    ::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .container {
    width: 100%;
    position: absolute;

    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10% 0 20% 0;

    ::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: -1;
    }

    .content {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      width: 100%;
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;

      .content-left {
        width: 60%;
        .title {
          font-size: 28px;
          font-weight: 600;
          color: ${(props) => props.theme.white};
        }

        .meta {
          margin-top: 40px;
          .description {
            font-size: 16px;
            line-height: 1.5;
            text-align: justify;

            .label {
              font-weight: 500;
              color: ${(props) => props.theme.white};
              opacity: 0.8;
            }
          }
        }
      }

      .content-right {
        flex: 1;
        width: 100%;
        .wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
    }
  }
`;

const MovieDetails: React.FC<MovieDetail> = (props) => {
  console.log("🚀 ~ file: MovieDetails.tsx ~ line 75 ~ props", props);
  return (
    <MovieDetailsStyles>
      <div className="backdrop">
        <Image
          src={tmdb.getImageUrl(props.backdrop_path, "original")}
          alt=""
          width="100%"
          height="50%"
          sizes="responsive"
          objectFit="cover"
          className="image"
        />
      </div>
      <div className="container">
        <div className="content">
          <div className="content-left">
            <h1 className="title">{props.title}</h1>
            <div className="meta">
              <p className="description">
                <span className="label">Mô tả:</span> {props.overview}
              </p>
            </div>
          </div>
          <div className="content-right">
            <div className="wrapper">
              <FieldMeta
                label="Thể Loại: "
                value={props.genres.slice(0, 3).map((item) => item.name)}
              />
              <FieldMeta
                label="Ngày Ra Rạp: "
                value={new Date(props.release_date).toLocaleDateString("vi-VN")}
              />
              <FieldMeta label="Thời Lượng: " value={`${props.runtime} Phút`} />
              <FieldMeta
                label="Trạng Thái: "
                value={`${
                  props.status.includes("Released") ? "Đã Chiếu" : "Sắp Chiếu"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </MovieDetailsStyles>
  );
};

export default MovieDetails;
