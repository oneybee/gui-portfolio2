/**
 *
 * Page334
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Header } from "modules/Header";
import { Menu } from "modules/Menu";
import { Link } from "modules/Router";
import { Hover } from "modules/Animations";
import { Row, Column } from "modules/Layout";
import {
  PortofolioCard,
  Image,
  Title,
  Text,
  Button
} from "modules/PortofolioCard";

class Page334 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Container
          style={{ width: "90%", maxWidth: "960px", margin: "0 auto" }}
        >
          <Header style={{ marginTop: "15%", marginBottom: "15%" }}>
            <span
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                fontFamily: "Roboto",
                fontSize: "90px",
                fontWeight: 700,
                transitionTarget: "color"
              }}
              transition={{ Target: "color" }}
              color="pink"
            >
              Design at Google. Chrome, Chrome OS and Android.
            </span>
          </Header>
          <Menu
            style={{
              fontFamily: "Roboto",
              marginTop: "2%",
              marginBottom: "2%",
              color: "#969696",
              lineHeight: "24px"
            }}
          >
            <li
              style={{
                display: "inline-block",
                marginLeft: "10px",
                height: "40px"
              }}
            >
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginRight: "35px",
                  backgroundColor: "rgb(41, 99, 255)",
                  color: "rgb(255, 255, 255)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  borderRadius: "16px",
                  boxShadow: "0 5px 20px rgba(41, 99, 255, 0.30)",
                  cursor: "pointer"
                }}
              >
                Home
              </span>
            </li>
            <Link to="get-in-touch" style={{ textDecoration: "none" }}>
              <Hover
                color="#222"
                transition={{ target: "all" }}
                style={{ color: "#969696", transitionDuration: "0.25s" }}
              >
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    fontSize: "11px",
                    height: "40px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      marginRight: "35px",
                      fontWeight: 300,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    get in touch
                  </span>
                </li>
              </Hover>
            </Link>
            <Link to="work">
              <Hover
                color="#222"
                style={{ color: "#969696", transitionDuration: "0.25s" }}
              >
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    fontSize: "11px",
                    height: "40px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      marginRight: "35px",
                      fontWeight: 300,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    work
                  </span>
                </li>
              </Hover>
            </Link>
            <a href="#">
              <Hover
                style={{ color: "#969696", transitionDuration: "0.25s" }}
                trainsition={{ target: "all" }}
                color="#222"
              >
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    fontSize: "11px",
                    height: "40px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      marginRight: "35px",
                      fontWeight: 300,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    writings
                  </span>
                </li>
              </Hover>
            </a>
            <a href="#">
              <Hover
                transition={{ target: "all" }}
                style={{ color: "#969696", transitionDuration: "0.25s" }}
                color="#222"
              >
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    fontSize: "11px",
                    height: "40px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      marginRight: "35px",
                      fontWeight: 300,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    photography
                  </span>
                </li>
              </Hover>
            </a>
          </Menu>
          <Row>
            <Column col="6" style={{ marginTop: "6%", marginBottom: "6%" }}>
              <PortofolioCard>
                <Image
                  style={{
                    paddingTop: "4%",
                    paddingRight: "4%",
                    paddingBottom: "4%"
                  }}
                >
                  <Hover
                    boxShadow="0 12px 65px 2px #2963ff4d, 0 1px 2px 1px #2963ff17"
                    transition={{ target: "all", time: "250" }}
                    style={{ display: "inline-block" }}
                  >
                    <Link
                      style={{ display: "block" }}
                      to="chrome-os-system-menu"
                    >
                      <img
                        src="http://sebastien-gabriel.com/images/home-feature-system-menu.png"
                        style={{ cursor: "pointer", width: "100%" }}
                      />
                    </Link>
                  </Hover>
                </Image>
                <Title style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  <span
                    style={{
                      fontSize: "22.5px",
                      fontWeight: 400,
                      fontFamily: "Roboto Mono",
                      color: "rgba(0, 0, 0, 0.7)"
                    }}
                  >
                    Chrome OS System menu
                  </span>
                </Title>
                <Text
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    marginBottom: "25px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      color: "rgba(0, 0, 0, 0.7)",
                      lineHeight: "30px"
                    }}
                  >
                    A case study into the design and specs of the latest revamp of the Chrome OS' system menu, the transient, core point of access of the core system features.
                  </span>
                </Text>
                <Button
                  style={{
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: "4px",
                    width: "127.08px",
                    height: "38px",
                    marginBottom: "10px",
                    display: "inline-block",
                    borderColor: "#2963ff"
                  }}
                >
                  <Link
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      cursor: "pointer",
                      lineHeight: "38px",
                      textDecoration: "none"
                    }}
                    to="chrome-os-system-menu"
                  >
                    <Hover
                      style={{
                        display: "inline-block",
                        color: "#2963ff",
                        height: "36px"
                      }}
                      transition={{ target: "all", time: 250 }}
                      color="#fff"
                      boxShadow="0 5px 20px rgba(41,99,255,0.09)"
                      backgroundColor="#2963ff"
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          paddingRight: "30px",
                          paddingLeft: "30px",
                          letterSpacing: "1px",
                          fontFamily: "Roboto"
                        }}
                      >
                        SEE MORE
                      </span>
                    </Hover>
                  </Link>
                </Button>
              </PortofolioCard>
            </Column>
            <Column col="6" style={{ marginTop: "6%", marginBottom: "6%" }}>
              <PortofolioCard>
                <Image
                  style={{
                    paddingTop: "4%",
                    paddingRight: "4%",
                    paddingBottom: "4%"
                  }}
                >
                  <Hover
                    style={{ display: "inline-block" }}
                    transition={{ target: "all", time: 250 }}
                    boxShadow="0 12px 65px 2px #2963ff4d, 0 1px 2px 1px #2963ff17"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/home-feature-chrome-desktop-article-small.png"
                      style={{ width: "100%" }}
                    />
                  </Hover>
                </Image>
                <Title style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  <span
                    style={{
                      fontSize: "22.5px",
                      fontWeight: 400,
                      fontFamily: "Roboto Mono",
                      color: "rgba(0, 0, 0, 0.7)"
                    }}
                  >
                    Redesigning Chrome desktop
                  </span>
                </Title>
                <Text
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    marginBottom: "25px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      color: "rgba(0, 0, 0, 0.7)",
                      lineHeight: "30px"
                    }}
                  >
                    I published a quite lengthy article on the 2 years long process of redesigning the chrome desktop Core UI. I talk design process, relationship with engineering, technical details and lessons learned from the initial public and internal release.
                  </span>
                </Text>
                <Button
                  style={{
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: "#2963ff",
                    borderRadius: "4px",
                    width: "109.28px",
                    display: "inline-block",
                    height: "38px",
                    marginBottom: "10px"
                  }}
                >
                  <a
                    href="#"
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      cursor: "pointer",
                      lineHeight: "38px",
                      textDecoration: "none"
                    }}
                  >
                    <Hover
                      style={{
                        display: "inline-block",
                        color: "#2963ff",
                        height: "36px"
                      }}
                      transition={{ target: "all", time: 250 }}
                      color="#fff"
                      boxShadow="0 5px 20px rgba(41,99,255,0.09)"
                      backgroundColor="#2963ff"
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          paddingRight: "30px",
                          paddingLeft: "30px",
                          letterSpacing: "1px",
                          fontFamily: "Roboto",
                          textTransform: "uppercase"
                        }}
                      >
                        read↗︎
                      </span>
                    </Hover>
                  </a>
                </Button>
              </PortofolioCard>
            </Column>
          </Row>
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page334;
