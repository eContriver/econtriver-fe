import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./ErrorHandler";
import Footer from "./Footer";
import Header from "./Header";
import Coins from "./Coins.jpg";
import Blockchain from "./BlockOfBlocks.jpg";
import Gaming from "./Gaming.jpg";
import Candles from "./Candles.jpg";
import { Messages } from "./StatusContext";
import { Carousel } from "react-bootstrap";

const MainCarousel = () => {
  const itemStyle = { height: "500px" };
  return (
    <Carousel className="border border-dark">
      <Carousel.Item style={itemStyle}>
        <div
          className="rounded fix-w-crop-h"
          style={{ backgroundImage: `url(${Coins})` }}
        />
        <Carousel.Caption>
          <div
            className="bg-light bg-gradient rounded border border-muted"
            style={{ "--bs-bg-opacity": 0.75 }}
          >
            <h3 className="text-dark">Cryptocurrency</h3>
            <p className="text-muted">
              Want to create your own NFT collection or token? Contact us to get
              started!
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={itemStyle}>
        <div
          className="rounded fix-w-crop-h"
          style={{ backgroundImage: `url(${Blockchain})` }}
        />
        <Carousel.Caption>
          <div
            className="bg-light bg-gradient rounded border border-muted"
            style={{ "--bs-bg-opacity": 0.75 }}
          >
            <h3 className="text-dark">Blockchain</h3>
            <p className="text-muted">
              We can help you build your Blockchain solution!
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={itemStyle}>
        <div
          className="rounded fix-w-crop-h"
          style={{ backgroundImage: `url(${Gaming})` }}
        />
        <Carousel.Caption>
          <div
            className="bg-light bg-gradient rounded border border-muted"
            style={{ "--bs-bg-opacity": 0.75 }}
          >
            <h3 className="text-dark">Game Development</h3>
            <p className="text-muted">
              Need help creating the next big hit? Reach out to us.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={itemStyle}>
        <div
          className="rounded fix-w-crop-h"
          style={{ backgroundImage: `url(${Candles})` }}
        />
        <Carousel.Caption>
          <div
            className="bg-light bg-gradient rounded border border-muted"
            style={{ "--bs-bg-opacity": 0.75 }}
          >
            <h3 className="text-dark">Financial Tools</h3>
            <p className="text-muted">
              Looking to build custom financial tools or a trading platform? We
              are here to help.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export const BadCarousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-dark slide carousel-fade rounded rounded-5 border border-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner" style={{ height: "500px" }}>
        <div className="carousel-item active">
          <div
            className="fix-w-crop-h"
            style={{ backgroundImage: `url(${Blockchain})` }}
          >
            <div className="carousel-caption d-none d-md-block">
              <div
                className="bg-light bg-gradient rounded border border-muted"
                style={{ "--bs-bg-opacity": 0.75 }}
              >
                <h5 className="display-1 text-muted">Blockchain</h5>
                <p className="display-6 text-dark">
                  Need help creating a Blockchain Solution?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="fix-w-crop-h"
            style={{ backgroundImage: `url(${Coins})` }}
          >
            <div className="carousel-caption d-none d-md-block">
              <div
                className="bg-light bg-gradient rounded border border-muted"
                style={{ "--bs-bg-opacity": 0.75 }}
              >
                <h5 className="display-1 text-muted">Cryptocurrencies</h5>
                <p className="display-6 text-dark">
                  Need help creating a cryptocurrency or token?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="fix-w-crop-h"
            style={{ backgroundImage: `url(${Gaming})` }}
          >
            <div className="carousel-caption d-none d-md-block">
              <div
                className="bg-light bg-gradient rounded border border-muted"
                style={{ "--bs-bg-opacity": 0.75 }}
              >
                <h5 className="display-1 text-muted">Game Development</h5>
                <p className="display-6 text-dark">
                  Need help creating the next game to rock the world?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="fix-w-crop-h"
            style={{ backgroundImage: `url(${Candles})` }}
          >
            <div className="carousel-caption d-none d-md-block">
              <div
                className="bg-light bg-gradient rounded border border-muted"
                style={{ "--bs-bg-opacity": 0.75 }}
              >
                <h5 className="display-1 text-muted">Financial Tools</h5>
                <p className="display-6 text-dark">
                  Looking to build custom financial tools or a trading platform?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="ContactUs bg-gray-800 bg-gradient">
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Header />
        <div className="container" id="content">
          <div className="row align-items-center justify-content-around">
            <div
              className="col media m-3 p-3 align-items-center rounded-3 border border-primary bg-dark text-light"
              // style={{ "--bs-bg-opacity": 0.8 }}
            >
              <div className="media-body p-2">
                <div className="row">
                  <div className="col">
                    <h5 className="mt-0 mb-1 text-secondary display-6">
                      <u>
                        <b>Welcome to eContriver!</b>
                      </u>
                    </h5>
                    <h6 className="text-muted">
                      We are a software engineering company.
                    </h6>
                    <MainCarousel />
                    {/* <BadCarousel /> */}
                    <hr />
                    We have expertise in Cryptocurrencies, Blockchains, NFTs
                    (ERC-721 and ERC-1155), Tokens (ERC-20), Game Development,
                    as well as Security and Asset Analysis.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Messages />
        </div>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Landing;
