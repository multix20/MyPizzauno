import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
      <Container>
        <Row>
          <Col>
            <span>© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</span>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <a href="#" className="text-white">Política de Privacidad</a>
          </Col>
          <Col>
            <a href="#" className="text-white">Términos de Servicio</a>
          </Col>
          <Col>
            <a href="#" className="text-white">Contacto</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
