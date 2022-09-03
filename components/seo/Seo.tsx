import Head from "next/head";
import { tmdb } from "../../services/tmdbApi";

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  meta: {
    slug: string;
    id: string;
  };
}

const Seo = ({ description, image, keywords, title, url, meta }: SeoProps) => {
  return (
    <Head>
      <link
        rel="canonical"
        href={`${url}/${meta.slug}?id=${meta.id}`}
      />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${title}, ${description}`} />
      <meta property="og:image" content={tmdb.getImageUrl(image, "w500")} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={`${title} - ${description}`} />
      <meta
        property="og:url"
        content={`${url}/${meta.slug}?id=${meta.id}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default Seo;
