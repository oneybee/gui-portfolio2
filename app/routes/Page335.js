/**
 *
 * Page335
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Link } from "modules/Router";
import { Footer } from "modules/Footer";
import { Hover } from "modules/Animations";

class Page335 extends Component {
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
                {" "}Chrome OS system menu
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
                The Chrome OS system menu is one of the key part of all Chromebook. It is the quick access point to the most essential parts of the operationg system, akin to the quick settings menu on Android. Always avaialbe, this transient UI enables the user to control the core features of the OS such as WiFi, tethering, data, brightness, volume, VPN, Bluetooth, etc...
              </span>
              <span style={{ display: "block", color: "#ffffff" }}>br</span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>
                The System menu is also the parent of various other system panels, all of which are attached to the shelf, providing the user quick access to all the system features he might need at the right time. In ChromeOS M56, this UI surface was redesigned in depth to bring a clean, balanced UI as well as new features. We made a point of delivering pixel perfect implementation based on thorough and well documented specs and mock-ups which you can discover below.
              </span>
            </p>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu/cros-system-menu-00.jpg"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu/cros-system-menu-00-2.jpg"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu/cros-system-menu-01.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu/cros-system-menu-02.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu/cros-system-menu-03.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <span style={{ display: "block" }}>br</span>
          <span style={{ display: "block" }}>br</span>
          <span style={{ display: "block" }}>br</span>
          <p>
            <span
              style={{
                fontSize: "25px",
                fontWeight: 400,
                color: "rgba(0,0,0,70)",
                lineHeight: "31.25px",
                marginTop: "2%",
                fontFamily: "Roboto Mono",
                display: "block"
              }}
            >
              System menu specification
            </span>
            <span style={{ display: "block" }}>br</span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: 400,
                color: "rgba(0,0,0,70)",
                lineHeight: "30px",
                marginBottom: "25px",
                display: "block",
                paddingRight: "15%"
              }}
            >
              I used a very thorough set of specification system to deliver high fidelity mock-ups and specs to engineering. All layout surfaces was checked and aligned to the pixel to deliver the cleanest in-OS experience possible. Below are some excerpt from these specs.
            </span>
          </p>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu/cros-system-menu-04.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu/cros-system-menu-05.png"
              style={{ maxWidth: "100%" }}
            />
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
                transition={{ time: 250, target: "all" }}
                style={{
                  height: "40px",
                  color: "rgb(41, 99, 255)",
                  borderRadius: "4px"
                }}
                color="white"
                boxShadow="0 12px 65px 2px #2963ff4d, 0 1px 2px 1px #2963ff17"
                backgroundColor="#2963ff"
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

export default Page335;
