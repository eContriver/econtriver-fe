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
