import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import slugify from "slugify";
import { Movie } from "../../@types";
import { MovieDetail } from "../../@types/MovieDetail";
import Seo from "../../components/seo";
import MovieDetails from "../../layouts/detail";
import { tmdb } from "../../services/tmdbApi";
import { MainLayout } from "../../styles/MainLayout";

interface Props {
  movie: MovieDetail;
}

interface Params extends ParsedUrlQuery {
  slug: string;
  id: string;
}

const MovieSlug = ({ movie }: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <MainLayout maxWidth="100%">
      {movie && (
        <>
          <Seo
            description={movie.overview}
            image={movie.backdrop_path}
            keywords={`${movie.title}, ${movie.overview}`}
            meta={{ slug: slug as string, id: movie.id }}
            title={movie.title}
            url={`https://movie-app-nextjs-green.vercel.app/movie`}
          />
          <MovieDetails {...movie}></MovieDetails>
        </>
      )}
    </MainLayout>
  );
};

export default MovieSlug;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const response = await axios.get(tmdb.getMovies("popular", 1));
  const paths = response.data.results.map((movie: Movie) => ({
    params: {
      slug:
        slugify(movie.title, {
          lower: true,
          locale: "vi",
        }) +
        "_" +
        movie.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { slug } = params!;
  const id = slug.split("_")[1];

  if (!id) {
    return {
      notFound: true,
    };
  } else {
    const response = await axios.get(tmdb.getDetail(id, "movie"));
    const movie: MovieDetail = response.data;

    return movie
      ? {
          props: {
            movie,
          },
        }
      : {
          notFound: true,
        };
  }
};

// SEO : compelling text that describes the content of the page
// title : the title of the page
// description : the description of the page
