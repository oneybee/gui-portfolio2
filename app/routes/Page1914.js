/**
 *
 * Page1914
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Link } from "modules/Router";
import { Footer } from "modules/Footer";
import { Hover } from "modules/Animations";

class Page1914 extends Component {
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
                {" "}Chrome OS Audio player
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
                Available natively in Chrome OS as a Files app extension, the audio player is a small and simple audio-only player able to read a wide variety of audio files. It also displays album cover and handles playlist. It received a Material design update on novemenber 2015 as part of our on-going effort to bring MD to the Chrome OS platform. It sports an enhanced, more touchable yet compact, UI layout and some Material design ripples and effect.
              </span>
            </p>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/audio-player/audio-player-01.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/audio-player/audio-player-02.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/audio-player/audio-player-03.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/audio-player/audio-player-04.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/audio-player/audio-player-05.png"
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
              The Audio player in place along with it's parent app, the Files app.
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

export default Page1914;
