/**
 *
 * Page110
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Menu } from "modules/Menu";
import { Link } from "modules/Router";
import { Hover } from "modules/Animations";
import { EmptySpace, Row, Column } from "modules/Layout";

class Page110 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Container
          style={{
            width: "90%",
            margin: "0 auto",
            maxWidth: "960px",
            fontFamily: "Roboto",
            color: "#000000b3"
          }}
        >
          <header style={{ marginTop: "15%", marginBottom: "15%" }}>
            <p style={{ marginBottom: "25px", paddingRight: "15%" }}>
              <span
                style={{
                  fontSize: "90px",
                  fontWeight: 700,
                  lineHeight: "85px"
                }}
              >
                Simple, clean and precise UI design. Follow me on{" "}
              </span>
              <a
                href="#"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                <span
                  style={{
                    fontSize: "90px",
                    fontWeight: 700,
                    lineHeight: "85px",
                    color: "#2963ff"
                  }}
                >
                  Dribbble
                </span>
              </a>
              <span
                style={{
                  fontSize: "90px",
                  fontWeight: 700,
                  lineHeight: "85px"
                }}
              >
                .
              </span>
            </p>
          </header>
          <Menu
            style={{
              paddingTop: "2%",
              paddingBottom: "2%",
              textTransform: "uppercase",
              color: "#969696"
            }}
          >
            <li
              style={{
                paddingLeft: "10px",
                display: "inline-block",
                height: "40px"
              }}
            >
              <Link style={{ textDecoration: "none" }} to="home">
                <Hover
                  style={{
                    display: "inline-block",
                    marginRight: "35px",
                    cursor: "pointer"
                  }}
                  transition={{ target: "all", time: 250 }}
                  color="#222"
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 300,
                      letterSpacing: "2px"
                    }}
                  >
                    home
                  </span>
                </Hover>
              </Link>
            </li>
            <li
              style={{
                paddingLeft: "10px",
                display: "inline-block",
                height: "40px"
              }}
            >
              <Link style={{ textDecoration: "none" }} to="get-in-touch">
                <Hover
                  style={{ display: "inline-block", marginRight: "35px" }}
                  transition={{ target: "all", time: 250 }}
                  color="#222"
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 300,
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    get in touch
                  </span>
                </Hover>
              </Link>
            </li>
            <li
              style={{
                paddingLeft: "10px",
                display: "inline-block",
                height: "40px"
              }}
            >
              <Hover>
                <Link>
                  <span
                    style={{
                      backgroundColor: "#2963ff",
                      color: "#ffffff",
                      paddingTop: "10px",
                      paddingRight: "20px",
                      paddingBottom: "10px",
                      paddingLeft: "20px",
                      borderRadius: "16px",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      boxShadow: "0 5px 20px rgba(41, 99, 255, 0.30)",
                      marginRight: "35px",
                      cursor: "pointer"
                    }}
                  >
                    work
                  </span>
                </Link>
              </Hover>
            </li>
            <li
              style={{
                paddingLeft: "10px",
                display: "inline-block",
                height: "40px"
              }}
            >
              <Link style={{ textDecoration: "none" }}>
                <Hover
                  style={{ display: "inline-block", marginRight: "35px" }}
                  transition={{ target: "all", time: 250 }}
                  color="#222"
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 300,
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    writings
                  </span>
                </Hover>
              </Link>
            </li>
            <li
              style={{
                paddingLeft: "10px",
                display: "inline-block",
                height: "40px"
              }}
            >
              <Link style={{ textDecoration: "none" }}>
                <Hover
                  style={{ display: "inline-block", marginRight: "35px" }}
                  transition={{ target: "all", time: 250 }}
                  color="#222"
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 300,
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    photography
                  </span>
                </Hover>
              </Link>
            </li>
          </Menu>
          <EmptySpace style={{ paddingTop: "15%", paddingBottom: "5%" }} />
          <Row>
            <Column col={6} style={{ marginBottom: "10%" }}>
              <div style={{ paddingBottom: "20px" }}>
                <Link style={{ display: "inline-block" }}>
                  <Hover
                    style={{ display: "inline-block" }}
                    transition={{ target: "all", time: 250 }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu.png"
                      style={{ maxWidth: "100%", cursor: "pointer" }}
                    />
                  </Hover>
                </Link>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#969696",
                  display: "block"
                }}
              >
                JAN 2017
              </span>
              <EmptySpace height={10} />
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  fontFamily: "Roboto Mono"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "#5A5A5A",
                    cursor: "pointer"
                  }}
                >
                  Chrome OS system menu
                </span>
              </p>
            </Column>
            <Column col={6} style={{ marginBottom: "10%" }}>
              <div style={{ paddingBottom: "20px" }}>
                <Link style={{ display: "inline-block" }}>
                  <Hover
                    style={{ display: "inline-block" }}
                    transition={{ target: "all", time: 250 }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/chrome-win.png"
                      style={{ maxWidth: "100%", cursor: "pointer" }}
                    />
                  </Hover>
                </Link>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#969696",
                  display: "block"
                }}
              >
                SEP 2016
              </span>
              <EmptySpace height={10} />
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  fontFamily: "Roboto Mono"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "#5A5A5A",
                    cursor: "pointer"
                  }}
                >
                  Chrome for Windows
                </span>
              </p>
            </Column>
            <Column style={{ marginBottom: "10%" }} col={12}>
              <div style={{ paddingBottom: "20px" }}>
                <Link style={{ display: "inline-block" }}>
                  <Hover
                    style={{ display: "inline-block" }}
                    transition={{ target: "all", time: 250 }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/chrome-macos.png"
                      style={{ maxWidth: "100%", cursor: "pointer" }}
                    />
                  </Hover>
                </Link>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#969696",
                  display: "block"
                }}
              >
                JUL 2016
              </span>
              <EmptySpace height={10} />
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  fontFamily: "Roboto Mono"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "#5A5A5A",
                    cursor: "pointer"
                  }}
                >
                  Chrome for MacOS
                </span>
              </p>
            </Column>
            <Column col={6} style={{ marginBottom: "10%" }}>
              <div style={{ paddingBottom: "20px" }}>
                <Link style={{ display: "inline-block" }}>
                  <Hover
                    style={{ display: "inline-block" }}
                    transition={{ target: "all", time: 250 }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/chrome-cros.png"
                      style={{ maxWidth: "100%", cursor: "pointer" }}
                    />
                  </Hover>
                </Link>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#969696",
                  display: "block"
                }}
              >
                APR 2016
              </span>
              <EmptySpace height={10} />
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  fontFamily: "Roboto Mono"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "#5A5A5A",
                    cursor: "pointer"
                  }}
                >
                  Chrome for Chrome OS
                </span>
              </p>
            </Column>
            <Column col={6} style={{ marginBottom: "10%" }}>
              <div style={{ paddingBottom: "20px" }}>
                <Link style={{ display: "inline-block" }}>
                  <Hover
                    style={{ display: "inline-block" }}
                    transition={{ target: "all", time: 250 }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/audio-player.png"
                      style={{ maxWidth: "100%", cursor: "pointer" }}
                    />
                  </Hover>
                </Link>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#969696",
                  display: "block"
                }}
              >
                NOV 2015
              </span>
              <EmptySpace height={10} />
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  fontFamily: "Roboto Mono"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "#5A5A5A",
                    cursor: "pointer"
                  }}
                >
                  Chrome OS audio player
                </span>
              </p>
            </Column>
          </Row>
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page110;
