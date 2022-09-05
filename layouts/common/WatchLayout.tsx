import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/icons";
import { routes } from "../../config/route";

const WatchLayoutStyles = styled.div`
  width: 100%;

  .watch-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    box-sizing: border-box;
    background-color: transparent;
    height: ${(props) => props.theme.header_height};
    display: flex;
    align-items: center;
    padding: 0 40px;
    margin-left: auto;
    margin-right: auto;

    .container {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

const WatchLayout = ({ children }: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.back();
  };

  return (
    <WatchLayoutStyles>
      <header className="watch-header">
        <div className="container">
          <Link href={routes.home}>
            <a className="logo">
              <Logo />
            </a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </WatchLayoutStyles>
  );
};

export default WatchLayout;
