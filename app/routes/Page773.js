/**
 *
 * Page773
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Menu } from "modules/Menu";
import { Hover } from "modules/Animations";
import { Link } from "modules/Router";
import { EmptySpace, Row, Column } from "modules/Layout";

class Page773 extends Component {
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
            <p>
              <span
                style={{
                  fontSize: "90px",
                  fontWeight: 700,
                  marginBottom: "25px",
                  paddingRight: "15%",
                  lineHeight: "85px"
                }}
              >
                Design at Google. Chrome, Chrome OS and Android.
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
                    home
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
              <Link style={{ textDecoration: "none" }} to="get-in-touch">
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
              <Link style={{ textDecoration: "none" }} to="work">
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
                    work
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
            <Column col={6} style={{ marginBottom: "6%", marginTop: "6%" }}>
              <div
                style={{
                  paddingTop: "4%",
                  paddingRight: "4%",
                  paddingBottom: "5%"
                }}
              >
                <Link style={{ display: "inline-block" }}>
                  <Hover
                    style={{ display: "inline-block" }}
                    transition={{ target: "all", time: 250 }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/home-feature-system-menu.png"
                      style={{ maxWidth: "100%", cursor: "pointer" }}
                    />
                  </Hover>
                </Link>
              </div>
              <span
                style={{
                  fontFamily: "Roboto Mono",
                  fontSize: "22.5px",
                  fontWeight: 400,
                  letterSpacing: "0.4px",
                  lineHeight: 1.25,
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  color: "#333335",
                  display: "block"
                }}
              >
                Chrome OS System menu
              </span>
              <p
                style={{
                  paddingBottom: "25px",
                  paddingRight: "15%",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "30px"
                }}
              >
                <span style={{ display: "block" }}>
                  A case study into the design and specs of the latest revamp of the Chrome OS' system menu, the transient, core point of access of the core system features.
                </span>
              </p>
              <Link style={{ display: "block", marginBottom: "10px" }}>
                <Hover
                  style={{
                    color: "#2963ff",
                    height: "38px",
                    border: "1px solid #2963ff",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                    borderRadius: "4px",
                    lineHeight: "38px"
                  }}
                  transition={{ target: "all", time: 250 }}
                  color="white"
                  backgroundColor="#2963ff"
                  boxShadow="0 5px 20px rgba(41, 99, 255, 0)"
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      lineHeight: "38px",
                      borderRadius: "4px",
                      letterSpacing: "1px",
                      cursor: "pointer"
                    }}
                  >
                    see more
                  </span>
                </Hover>
              </Link>
            </Column>
            <Column col={6} style={{ marginBottom: "6%", marginTop: "6%" }}>
              <div
                style={{
                  paddingTop: "4%",
                  paddingRight: "4%",
                  paddingBottom: "5%"
                }}
              >
                <Link style={{ display: "inline-block" }}>
                  <Hover
                    style={{ display: "inline-block" }}
                    transition={{ target: "all", time: 250 }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/home-feature-chrome-desktop-article-small.png"
                      style={{ maxWidth: "100%", cursor: "pointer" }}
                    />
                  </Hover>
                </Link>
              </div>
              <span
                style={{
                  fontFamily: "Roboto Mono",
                  fontSize: "22.5px",
                  fontWeight: 400,
                  letterSpacing: "0.4px",
                  lineHeight: 1.25,
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  color: "#333335",
                  display: "block"
                }}
              >
                Redesigning Chrome desktop
              </span>
              <p
                style={{
                  paddingBottom: "25px",
                  paddingRight: "15%",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "30px"
                }}
              >
                <span style={{ display: "block" }}>
                  I published a quite lengthy article on the 2 years long process of redesigning the chrome desktop Core UI. I talk design process, relationship with engineering, technical details and lessons learned from the initial public and internal release.
                </span>
              </p>
              <Link style={{ display: "block", marginBottom: "10px" }}>
                <Hover
                  style={{
                    color: "#2963ff",
                    height: "38px",
                    border: "1px solid #2963ff",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                    borderRadius: "4px",
                    lineHeight: "38px"
                  }}
                  transition={{ target: "all", time: 250 }}
                  color="white"
                  backgroundColor="#2963ff"
                  boxShadow="0 5px 20px rgba(41, 99, 255, 0)"
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      lineHeight: "38px",
                      borderRadius: "4px",
                      letterSpacing: "1px",
                      cursor: "pointer"
                    }}
                  >
                    Read↗︎
                  </span>
                </Hover>
              </Link>
            </Column>
          </Row>
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page773;
