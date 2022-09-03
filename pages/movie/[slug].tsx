import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import slugify from "slugify";
import { Movie } from "../../@types";
import { MovieDetail } from "../../@types/MovieDetail";
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
    <MainLayout marginTop="100px">
      {movie && (
        <>
          <Head>
            <link
              rel="canonical"
              href={`https://movie-app-nextjs-green.vercel.app/movie/${slug}?id=${movie.id}`}
            />
            <meta property="og:type" content="website" />
            <title>{movie.title}</title>
            <meta name="description" content={movie.overview} />
            <meta
              name="keywords"
              content={`${movie.title}, ${movie.overview}`}
            />
            <meta
              property="og:image"
              content={tmdb.getImageUrl(movie.backdrop_path, "w500")}
            />
            <meta property="og:image:type" content="image/png" />
            <meta
              property="og:image:alt"
              content={`${movie.title} - ${movie.overview}`}
            />
            <meta
              property="og:url"
              content={`https://movie-app-nextjs-green.vercel.app/movie/${slug}?id=${movie.id}`}
            />
            <meta property="og:title" content={movie.title} />
            <meta property="og:description" content={movie.overview} />
          </Head>
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
};

// SEO : compelling text that describes the content of the page
// title : the title of the page
// description : the description of the page
