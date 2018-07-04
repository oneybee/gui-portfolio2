/**
 *
 * Page2025
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Link } from "modules/Router";
import { Footer } from "modules/Footer";

class Page2025 extends Component {
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
                {" "}Chrome OS Files app
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
                Chrome M46 brought the revamped version of the Built-in Chrome OS files app. This new version features a revamped UI and UX with the addition of cloud sync as well as third party services such as DropBox. The UI is a scaled down version of the Material design spec for fit the need of a more condensed desktop UI. Ripples and MD effect have also been modified to deliver a delightful experience on the platform.
              </span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>
                In addition, we brought Material motion to the core UI with complex morphing ripples and bubbles burst on the icons. We also created two different layout: One mouse optimized layout and a more spaced-out one that we are calling "hybrid", which will be deployed by default on touch-enabled Chromebooks. The goal of the layout is to enable better touchability without comprimising layout density and productivity.
              </span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>br</span>
              <span>
                Also new with Chrome, we introduced a fully re-themed Incognito mode, sporting a beautiful black layout from the tabs to the toolbar and even the NTP and omnibox dropdown.
              </span>
            </p>
          </Container>
          <div
            style={{
              display: "inline",
              fontFamily: "Roboto Mono",
              marginTop: "2%"
            }}
          >
            <span
              style={{
                fontSize: "25px",
                fontWeight: 400,
                color: "rgba(0,0,0,70)",
                lineHeight: "40px"
              }}
            >
              {" "}Chrome normal layout
            </span>
          </div>
          <span style={{ display: "block" }}>br</span>
          <p
            style={{
              fontFamily: "Roboto",
              paddingBottom: "3%",
              lineHeight: "30px",
              marginBottom: "25px",
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(0,0,0,70)",
              paddingRight: "15%"
            }}
          >
            <span style={{ display: "block" }}>
              The Chrome normal layout is the default Chrome UI we've known over the years. Optimized for mouse-only input, it is currently deployed on all desktop platforms. Starting with non-touchscreen Chromebooks, the new Chrome Material version will bring a complete visual refresh to this layout.
            </span>
          </p>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-01.png"
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
              Chrome normal layout, in default mode.
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-02.png"
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
              Chrome normal layout, in incognito mode.
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-03.png"
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
              Chrome Material design with dev tools (dev tools designer{" "}
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
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-04.png"
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
              Chrome icognito layout omnibox dropdown
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-05.png"
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
              Chrome normal layout omnibox dropdown
            </span>
          </Container>
          <div
            style={{
              display: "inline",
              fontFamily: "Roboto Mono",
              marginTop: "2%"
            }}
          >
            <span
              style={{
                fontSize: "25px",
                fontWeight: 400,
                color: "rgba(0,0,0,70)",
                lineHeight: "40px"
              }}
            >
              {" "}Chrome Hybrid layout
            </span>
          </div>
          <span style={{ display: "block" }}>br</span>
          <p
            style={{
              fontFamily: "Roboto",
              paddingBottom: "3%",
              lineHeight: "30px",
              marginBottom: "25px",
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(0,0,0,70)",
              paddingRight: "15%"
            }}
          >
            <span style={{ display: "block" }}>
              Coming with this redesign, the "Hybrid" layout which aims at Hybrid devices such as convertibles and touch-screen enabled computers enables better touchability while compromising as little as possible on productivity. This layout will be deployed first by default on touchscreen Chromebooks only.
            </span>
          </p>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-blueprint.png"
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
              The size difference between Chrome normal layout and Hybrid layout
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-blueprint-02.png"
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
              Chrome normal vs. Chrome hybrid visualization
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-06.png"
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
              Chrome Hybrid with the new .pdf viewer by{" "}
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
              <span>Codey Sielawa) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-07.png"
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
              Chrome Hybrid incognito
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-08.png"
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
              Chrome hybrid layout omnibox dropdown
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-09.png"
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
              Chrome hybrid incognito layout omnibox dropdown
            </span>
          </Container>
          <div
            style={{
              display: "inline",
              fontFamily: "Roboto Mono",
              marginTop: "2%"
            }}
          >
            <span
              style={{
                fontSize: "25px",
                fontWeight: 400,
                color: "rgba(0,0,0,70)",
                lineHeight: "40px"
              }}
            >
              Common elements
            </span>
          </div>
          <span style={{ display: "block" }}>br</span>
          <p
            style={{
              fontFamily: "Roboto",
              paddingBottom: "3%",
              lineHeight: "30px",
              marginBottom: "25px",
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(0,0,0,70)",
              paddingRight: "15%"
            }}
          >
            <span style={{ display: "block" }}>
              Compoents that you can find in both Normal and Hybrid mode. Beside spacing, everything is shared between the two versions, including iconography and motion.
            </span>
          </p>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-10.png"
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
              The new download shelf, will be available on Windows, replace by notification on Chrome OS
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-11-01.png"
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
              New MD buttons for dialogs and secondary UI
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-11-02.png"
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
              Chrome basic color scheme
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-12-01.png"
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
              Iconography principle. Chrome follows a smaller grid than{" "}
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
              <span>Material's </span>
            </a>
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              to keep the UI more dense.
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-12.png"
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
              New iconography, rendered programmatically based on .svg.
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-13.png"
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
              Infobar design, including the new buttons
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-14.png"
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
              New infobar design in place
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-14.png"
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
              Chrome Hybrid with the new .pdf viewer by{" "}
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
              <span>Codey Sielawa) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-14.png"
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
              Chrome Hybrid with the new .pdf viewer by{" "}
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
              <span>Codey Sielawa) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-14.png"
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
              Chrome Hybrid with the new .pdf viewer by{" "}
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
              <span>Codey Sielawa) </span>
            </a>
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
                  color: "rgb(41, 99, 255)",
                  fontWeight: 600,
                  border: "1px solid #2963ff",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                back to work
              </span>
            </Link>
          </Footer>
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page2025;
