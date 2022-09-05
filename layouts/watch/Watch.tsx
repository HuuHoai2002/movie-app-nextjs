import styled from "styled-components";
import { MovieDetail } from "../../@types/MovieDetail";

const WatchStyled = styled.div`
  .watch {
    .frame {
      width: 100%;
      max-height: 100vh;
      aspect-ratio: 16 / 9;
    }
  }
`;

const Watch = (props: MovieDetail) => {
  return (
    <WatchStyled>
      <div className="watch">
        <iframe
          className="frame"
          src={`https://www.2embed.to/embed/tmdb/movie?id=${props.id}`}
          allowFullScreen></iframe>
      </div>
    </WatchStyled>
  );
};

export default Watch;
