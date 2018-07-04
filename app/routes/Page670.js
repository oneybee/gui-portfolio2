/**
 *
 * Page670
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Link } from "modules/Router";
import { EmptySpace } from "modules/Layout";
import { Footer } from "modules/Footer";
import { Hover } from "modules/Animations";

class Page670 extends Component {
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
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "24px"
          }}
        >
          <Container style={{ paddingTop: "4%", paddingBottom: "4%" }}>
            <div
              style={{
                display: "inline",
                marginBottom: "10%",
                fontFamily: "Roboto Mono"
              }}
            >
              <Link
                to="work"
                style={{
                  color: "#969696",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: "20.8px",
                  textDecoration: "none"
                }}
              >
                <span>↤ Work /</span>
              </Link>
              <span
                style={{
                  fontSize: "25px",
                  fontWeight: 400,
                  color: "rgba(0,0,0,70)",
                  lineHeight: "40px"
                }}
              >
                {" "}Chrome for Mac OS
              </span>
            </div>
            <p
              style={{
                fontFamily: "Roboto",
                paddingTop: "3%",
                paddingBottom: "3%",
                lineHeight: "30px",
                marginBottom: "25px",
                fontSize: "15px",
                fontWeight: 400,
                color: "rgba(0,0,0,70)"
              }}
            >
              <span style={{ display: "block" }}>
                Chrome Material design for MacOS was part of the second wave of deployment of the new Chrome Core UI design on desktop.
              </span>
              <span>First to be updated was </span>
              <Link style={{ textDecoration: "underline", cursor: "pointer" }}>
                <span style={{ textDecorationStyle: "solid" }}>Chrome OS.</span>
              </Link>
              <EmptySpace height="30" />
              <EmptySpace height="30" />
              <span style={{ display: "block" }}>
                Similarily to its Chrome OS counterpart, and while using Cocoa, the Mac version of the Core UI ditches bitmap assets in favor of complete programmatic rendering. The new chrome for Mac also gets the new dark incognito mode.
              </span>
              <EmptySpace height="30" />
              <EmptySpace height="30" />
              <span style={{ display: "block" }}>
                My responsibility on this project was to design, spec and work closely with Engineering to bring the new design to life in its smallest details. Engineering worked tirelessly to give Chrome this revamp, making it more inline with it's MacOS environment and more consistent with the Chrome brand.
              </span>
              <EmptySpace height="30" />
              <EmptySpace height="30" />
              <span>
                At the same time I was working on the Core UI, other team-members worked on other core features of the browser, also featured in a few of the screenshots below such as the new Omnibox security visuals (created by
                {" "}
              </span>
              <a
                href="#"
                style={{
                  textDecoration: "underline",
                  color: "#000",
                  cursor: "pointer",
                  textDecorationStyle: "solid"
                }}
              >
                <span>Max Walker) </span>
              </a>
              <span>
                or the new inner pages: downloads and history (created by{" "}
              </span>
              <a
                href="#"
                style={{
                  textDecoration: "underline",
                  color: "#000",
                  cursor: "pointer",
                  textDecorationStyle: "solid"
                }}
              >
                <span>Alan Bettes) </span>
              </a>
            </p>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-01.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-02.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-03.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-04.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              The new history page, designed by{" "}
            </span>
            <a
              href="#"
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#B4B4B4",
                fontSize: "12px",
                fontFamily: "Roboto Mono"
              }}
            >
              <span>Alan Bettes) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-05.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              The new history page, designed by{" "}
            </span>
            <a
              href="#"
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#B4B4B4",
                fontSize: "12px",
                fontFamily: "Roboto Mono"
              }}
            >
              <span>Alan Bettes) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-06.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              The inspector in MacOS, work of{" "}
            </span>
            <a
              href="#"
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#B4B4B4",
                fontSize: "12px",
                fontFamily: "Roboto Mono"
              }}
            >
              <span>Max Walker) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-07.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              An excerpt of some of the spec used to implement the new design
            </span>
          </Container>
          <Footer
            style={{
              textAlign: "center",
              marginTop: "10%",
              borderTop: "1px solid #e6e6e6"
            }}
          >
            <span
              style={{
                fontSize: "14px",
                lineHeight: "30px",
                paddingTop: "5%",
                display: "block",
                marginBottom: "25px",
                color: "#969696",
                textTransform: "uppercase"
              }}
            >
              THANKS FOR watching
            </span>
            <Link to="work">
              <Hover
                transition={{ target: "all", time: 250 }}
                backgroundColor="#2963ff"
                style={{
                  height: "40px",
                  color: "rgb(41, 99, 255)",
                  borderRadius: "4px"
                }}
                color="white"
                boxShadow="0 12px 65px 2px #2963ff4d, 0 1px 2px 1px #2963ff17"
              >
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "38px",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    letterSpacing: "1px",
                    display: "inline-block",
                    fontWeight: 600,
                    border: "1px solid #2963ff",
                    cursor: "pointer",
                    borderRadius: "4px"
                  }}
                >
                  back to work
                </span>
              </Hover>
            </Link>
          </Footer>
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page670;
