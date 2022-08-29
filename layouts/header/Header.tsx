import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/icons";
import { routes } from "../../config/route";
import { navigation } from "./navigation";

const HeaderStyles = styled.header`
  box-sizing: border-box;
  height: ${(props) => props.theme.header_height};
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;

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
          font-weight: 500;
          color: ${(props) => props.theme.white};
          opacity: 0.6;
          transition: all 0.25s;

          &.active {
            opacity: 1;
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
  const activeClassName = (path: string, className: string) =>
    pathname === path ? `${className} active` : className;

  return (
    <HeaderStyles>
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
