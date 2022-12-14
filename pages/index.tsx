import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Banner from "../layouts/banner";
import { MovieList } from "../layouts/movie";
import { MainLayout } from "../styles/MainLayout";

const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Home: NextPage = () => {
  return (
    <HomeStyles>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="http://img-zlr1.tv360.vn/tv360-static/static/web/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="http://img-zlr1.tv360.vn/tv360-static/static/web/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="http://img-zlr1.tv360.vn/tv360-static/static/web/favicon/favicon-16x16.png"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="facebook-domain-verification"
          content="ujyx78ls6jpp0dbz9oqy356o9tr5ni"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta content="INDEX,FOLLOW" name="robots" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="NextJS Movie App - Xem phim mọi lúc, mọi nơi, miễn phí truy cập vô thời hạn, kho phim khổng siêu khổng lồ, đủ mọi thể loại: Phim Kinh Dị, Phim Hoạt Hình, Phim Hành Động, Phim Phiêu Lưu, Phim 4K."
        />
        <meta
          name="keywords"
          content="Phim hành động, phim HD, VTV1, VTV2, VTV3, VTV6, K+, HTV, Thể Thao, Truyền Hình Trực Tuyến, Bóng Đá, Phim Hàn Quốc, Phim Trung Quốc, Ngoại hạng Anh, xem tivi miễn phí Data 4G"
        />
        <meta
          property="og:site_name"
          content="movie-app-nextjs-green.vercel.app"
        />
        <meta property="og:rich_attachment" content="true" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://cdn-vttvas.public.storebox.vn/image1/TV360_static_image/tivi360.jpg"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="NextJS Movie App - Xem phim miễn phí, không lo quảng cáo, kho phim HD đặc sắc"
        />
        <meta property="og:url" content="http://tv360.vn" />
        <meta
          property="og:title"
          content="NextJS Movie App - Xem phim miễn phí, không lo quảng cáo, kho phim HD đặc sắc"
        />
        <meta
          property="og:description"
          content="NextJS Movie App - Xem phim mọi lúc, mọi nơi, miễn phí truy cập vô thời hạn, kho phim khổng siêu khổng lồ, đủ mọi thể loại: Phim Kinh Dị, Phim Hoạt Hình, Phim Hành Động, Phim Phiêu Lưu, Phim 4K."
        />
        <title>NextJS Movie App | Phim</title>
        <meta name="next-head-count" content="20" />
      </Head>
      <div
        style={{
          minHeight: "100vh",
        }}>
        <Banner></Banner>
      </div>
      <MainLayout>
        <MovieList></MovieList>
      </MainLayout>
    </HomeStyles>
  );
};

export default Home;
