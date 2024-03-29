import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainPage from "./components/MainPage";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col-2">
            <Sidebar></Sidebar>
          </Col>
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <MainPage></MainPage>
          </Col>
        </Row>
      </Container>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Player></Player>
      </Container>
    </>
  );
}

export default App;
