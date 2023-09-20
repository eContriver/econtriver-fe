import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./ErrorHandler";
import Footer from "./Footer";
import Header from "./Header";
import { Messages, useStatus } from "./StatusContext";

const ContactForm = () => {
  const { addMessage, addError } = useStatus();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://nn8nhnj871.execute-api.us-east-1.amazonaws.com/staging/contactus",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        addMessage("Message sent successfully!", "success");
      } else {
        addMessage(
          `An error occurred while sending message: ${response}`,
          "danger"
        );
      }
    } catch (error) {
      addError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Message"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

const ContactUs = () => {
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
                    We have expertise in EVM Blockchains (nodes and protocols),
                    NFTs (ERC-721 and ERC-1155), Tokens (ERC-20), Game
                    Development (Cocos and Unity), as well as Security/Asset
                    Analysis.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
          <Messages />
        </div>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default ContactUs;
