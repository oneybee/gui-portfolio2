/**
 *
 * Page778
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Menu } from "modules/Menu";
import { Link } from "modules/Router";
import { Hover } from "modules/Animations";

class Page778 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Container
          style={{
            width: "90%",
            margin: "0 auto",
            fontFamily: "Roboto",
            color: "#000000b3",
            maxWidth: "960px"
          }}
        >
          <header>
            <p
              style={{
                marginTop: "15%",
                marginBottom: "15%",
                fontSize: "90px",
                fontWeight: 700,
                lineHeight: "85px"
              }}
            >
              <span>Simple, clean and precise UI design. Follow me on </span>
              <a href="#" style={{ color: "#2963ff", textDecoration: "none" }}>
                <span>Dribbble</span>
              </a>
              <span>.</span>
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
              <Link
                to="home"
                style={{ marginRight: "35px", textDecoration: "none" }}
              >
                <Hover transition={{ target: "all", time: 250 }} color="#222">
                  <span style={{ fontSize: "11px", letterSpacing: "2px" }}>
                    HOME
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
              <Link
                to="home"
                style={{ marginRight: "35px", textDecoration: "none" }}
              >
                <Hover transition={{ target: "all", time: 250 }} color="#222">
                  <span style={{ fontSize: "11px", letterSpacing: "2px" }}>
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
              <Link
                to="home"
                style={{ marginRight: "35px", textDecoration: "none" }}
              >
                <Hover transition={{ target: "all", time: 250 }} color="#222">
                  <span
                    style={{
                      fontSize: "11px",
                      letterSpacing: "2px",
                      backgroundColor: "#2963ff",
                      paddingTop: "10px",
                      paddingRight: "20px",
                      paddingBottom: "10px",
                      paddingLeft: "20px",
                      color: "#ffffff",
                      borderRadius: "16px",
                      boxShadow: "0 5px 20px rgba(41, 99, 255, 0.30)"
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
              <Link
                to="home"
                style={{ marginRight: "35px", textDecoration: "none" }}
              >
                <Hover transition={{ target: "all", time: 250 }} color="#222">
                  <span style={{ fontSize: "11px", letterSpacing: "2px" }}>
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
              <Link
                to="home"
                style={{ marginRight: "35px", textDecoration: "none" }}
              >
                <Hover transition={{ target: "all", time: 250 }} color="#222">
                  <span style={{ fontSize: "11px", letterSpacing: "2px" }}>
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

export default Page778;
