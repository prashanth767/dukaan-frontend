// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreateStore from "./Components/create-store.component";
import EditStore from "./Components/edit-store.component";
import StoreList from "./Components/store-list.component";
import StoreTileView from "./Components/StoreTileView"

// App Component
const App = () => {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>
                    <Link to={"/create-store"} className="nav-link"> Dukaan </Link>
                </Navbar.Brand>

                <Nav className="justify-content-end">
                  <Nav>
                    <Link to={"/create-store"} className="nav-link"> Create Store </Link>
                  </Nav>

                  <Nav>
                    <Link to={"/store-list"} className="nav-link"> Store List </Link>
                  </Nav>
                </Nav>
              </Container>
            </Navbar>
          </header>

          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                    <Routes>
                      <Route path="/" element={<CreateStore/>} />
                      <Route path="/create-store" element={<CreateStore/>} />
                      <Route path="/edit-store/:id" element={<EditStore/>} />
                      <Route path="/store-list"  element={<StoreTileView/>} />
                    </Routes>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
};

export default App;
