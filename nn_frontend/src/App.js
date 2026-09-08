import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import BootstrapTextarea from './BootstrapTextArea';
import ButterflyLogo from './components/ButterflyLogo';

const App = () => {
  return (
    <div className="App">
      <Container fluid className="app-container">
        <Row className="header-section">
          <Col lg={{ span: 6, offset: 1 }} className="header-content">
            <div className="header-container">
              <h1 className="app-title">
                <span className="title-line">NaSumm</span>
              </h1>
              <p className="app-subtitle">
                Transforma noticias en resúmenes concisos y claros
              </p>
            </div>
          </Col>
          <Col lg={4} className="header-decoration">
            <div className="decoration-circle"></div>
          </Col>
        </Row>
        
        <Row className="content-section">
          <Col lg={{ span: 6, offset: 1 }}>
            <div className="content-card">
              <BootstrapTextarea />
            </div>
          </Col>
          <Col lg={4} className="animation-column">
            <div className="animation-container">
              <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
                <div className="floating-dot dot-1"></div>
                <div className="floating-dot dot-2"></div>
                <div className="floating-dot dot-3"></div>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col>
            <ButterflyLogo />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;