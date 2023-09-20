import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./ErrorHandler";
import Footer from "./Footer";
import Header from "./Header";
import Finance from "./Finance.png";
import { Messages } from "./StatusContext";
import { Card, CardGroup } from "react-bootstrap";

function ProductCards() {
  return (
    <CardGroup>
      <Card className={"bg-dark w-100"}>
        <Card.Header>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0S-twFWNIRw?si=hHe6OlKwEbpGXOir"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Card.Header>
        <Card.Body>
          <Card.Title>Perpetuator</Card.Title>
          <Card.Text>
            <p>
              We are building an AI as a Service platform that facilitates
              asking questions in natural language about documents. This helps
              with things like, tell me what this patent covers or tell me if
              this insurance plan will cover this procedure.
            </p>
            <p>
              We&apos;ve already built the APIs and have a command-line tool
              that can be used to interact with this service. The front-end is
              being built right now so that we can all use it from a webpage.
            </p>
            <p>
              If you are comfortable using a command-line tool, then let is know
              on the <a href={"/contactus"}>Contact Us</a> page and we can
              provide early access to you. If you have the desire to contribute,
              then also do please reach out. We are putting together an amazing
              team and looking for more great people!
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card className={"bg-dark"}>
        <Card.Img variant="top" src={Finance} />
        <Card.Body>
          <Card.Title>Finance</Card.Title>
          <Card.Text>
            This project facilitates trying different buy and sell strategies
            for stock and crypto currencies. There are also scripts that provide
            different types of security analysis. Both technical analysis and
            fundamental analysis are considered.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <a
              href="https://github.com/eContriver/finance"
              target="_blank"
              rel="noreferrer"
            >
              View the repository
            </a>
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

const Products = () => {
  return (
    <div className="Products bg-gray-800 bg-gradient">
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
                        <b>Our Products and Tools</b>
                      </u>
                    </h5>
                    <h6 className="text-muted">
                      We aim to make you more productive.
                    </h6>
                    <ProductCards />
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

export default Products;
