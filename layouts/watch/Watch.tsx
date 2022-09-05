import styled from "styled-components";
import { MovieDetail } from "../../@types/MovieDetail";

const WatchStyled = styled.div``;

const Watch = (props: MovieDetail) => {
  return (
    <WatchStyled>
      <div className="watch"></div>
    </WatchStyled>
  );
};

export default Watch;
