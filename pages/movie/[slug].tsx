import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { MovieDetail } from "../../@types/MovieDetail";
import MovieDetails from "../../layouts/detail";
import { tmdb } from "../../services/tmdbApi";
import { MainLayout } from "../../styles/MainLayout";

interface Props {
  movie: MovieDetail;
}

const MovieSlug = ({ movie }: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <MainLayout marginTop="100px">
      <Head>
        <link
          rel="canonical"
          href={`https://movie-app-nextjs-green.vercel.app/movie/${slug}?id=${movie.id}`}
        />
        <meta property="og:type" content="website" />
        <title>{movie.title}</title>
        <meta name="description" content={movie.title} />
        <meta name="keywords" content={`${movie.title}, ${movie.overview}`} />
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
        <meta property="og:description" content={movie.title} />
      </Head>
      <MovieDetails {...movie}></MovieDetails>
    </MainLayout>
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

// SEO : compelling text that describes the content of the page
// title : the title of the page
// description : the description of the page
