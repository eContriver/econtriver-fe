import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Alert, Container, Nav, Navbar } from "react-bootstrap";
import Landing from "./Landing";
import { StatusProvider } from "./StatusContext";
import Products from "./Products";
// import ContactUs from "./ContactUs";
import eContriverLogo from "./eContriver_logo2.png";

function Unknown() {
  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>404 Not Found</Alert.Heading>
        <span>
          The URL you are trying to access does not exist or an error has
          occurred.
        </span>
        <hr />
        <pre>
          You can head back to our <a href="/">homepage</a>.
        </pre>
      </Alert>
    </>
  );
}

function App() {
  return (
    <StatusProvider>
      <Router>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/" className="">
              {/* <span className="text-light">e</span> */}
              {/* <span className="text-primary">Contriver</span> */}
              <img
                style={{
                  width: 200 + "px",
                  height: 52 + "px",
                }}
                src={eContriverLogo}
                alt="eContriver Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/products" className="text-light">
                  Products
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  href="https://discord.gg/RqFW3468wY"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/products" element={<Products />} />
          {/* <Route path="/contactus" element={<ContactUs />} /> */}
          <Route path="/*" element={<Unknown />} />
        </Routes>
      </Router>
    </StatusProvider>
  );
}

export default App;
