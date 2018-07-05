/**
 *
 * Page911
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Menu } from "modules/Menu";
import { Link } from "modules/Router";
import { Hover } from "modules/Animations";

class Page911 extends Component {
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
                Want to chat? Hit me up on{" "}
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
                  Twitter
                </span>
              </a>
              <span
                style={{
                  fontSize: "90px",
                  fontWeight: 700,
                  lineHeight: "85px"
                }}
              >
                ,{" "}
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
                  Messenger{" "}
                </span>
              </a>
              <span
                style={{
                  fontSize: "90px",
                  fontWeight: 700,
                  lineHeight: "85px"
                }}
              >
                {" "}or drop me an{" "}
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
                  email
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
                    get in touch
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
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page911;
