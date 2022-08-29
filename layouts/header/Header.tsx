import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/icons";
import { routes } from "../../config/route";
import { navigation } from "./navigation";

interface StylesProps {
  active: boolean;
}

const HeaderStyles = styled.header<StylesProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  height: ${(props) => props.theme.header_height};
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease 0s;
  background: ${(props) =>
    props.active
      ? props.theme.secondary
      : "linear-gradient(rgb(16, 16, 16), rgba(16, 16, 16, 0));"};

  .container {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;

    .nav-left {
      display: flex;
      align-items: center;

      .navigation {
        margin-left: 40px;
        display: flex;
        align-items: center;
        gap: 32px;

        .link {
          display: block;
          padding: 5px 0;
          font-weight: 400;
          color: ${(props) => props.theme.white};
          opacity: 0.6;
          transition: all 0.25s;

          &.active {
            opacity: 1;
            font-weight: 500;
          }

          &:hover:not(.active) {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [active, setActive] = React.useState(false);
  const activeClassName = (path: string, className: string) =>
    pathname === path ? `${className} active` : className;

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderStyles active={active}>
      <div className="container">
        <div className="nav-left">
          <Link href={routes.home}>
            <a className="logo">
              <Logo />
            </a>
          </Link>
          <nav className="navigation">
            {navigation.map((nav) => (
              <Link key={nav.id} href={nav.path}>
                <a className={activeClassName(nav.path, "link")}>{nav.title}</a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="nav-right"></div>
      </div>
    </HeaderStyles>
  );
};

export default Header;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
