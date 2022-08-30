import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Movie } from "../../@types";
import { tmdb } from "../../services/tmdbApi";

interface Props {
  movie: Movie;
}

const MovieSlug = ({ movie }: Props) => {
  console.log("🚀 ~ file: [slug].tsx ~ line 12 ~ MovieSlug ~ movie", movie);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Head>
        <link
          rel="canonical"
          href={`https://movie-app-nextjs-green.vercel.app/movie/${slug}?id=${movie.id}`}
        />
        <meta property="og:type" content="website" />
        <title>
          {movie.title} - {movie.overview}
        </title>
        <meta name="description" content={movie.title} />
        <meta name="keywords" content={`${movie.title}, ${movie.overview}`} />
        <meta
          property="og:image"
          content={tmdb.getImageUrl(movie.poster_path, "w500")}
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
        <meta property="og:description" content={movie.title} />
      </Head>
    </div>
  );
};

export default MovieSlug;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;
  const response = await axios.get(tmdb.getDetail(id as string, "movie"));
  const movie = response.data;

  return {
    props: {
      movie,
    },
  };
};
