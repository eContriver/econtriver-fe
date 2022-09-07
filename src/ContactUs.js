import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./ErrorHandler";
import Footer from "./Footer";
import Header from "./Header";
import { Messages } from "./StatusContext";

const ContactUs = () => {
  return (
    <div className="ContactUs bg-gray-800 bg-gradient">
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Header />
        <div className="container" id="content">
          <div className="row align-items-center justify-content-around">
            <div
              className="col media m-3 p-3 align-items-center rounded-3 border border-primary bg-dark bg-gradien text-light"
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
                    We have expertise in EVM Blockchains (nodes and protocols),
                    NFTs (ERC-721 and ERC-1155), Tokens (ERC-20), Game
                    Development (Cocos and Unity), as well as Security/Asset
                    Analysis.
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

export default ContactUs;
