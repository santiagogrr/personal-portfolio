import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer>
            <Container fluid={true}>
                <Row className="border-top justify-content-end p-3">
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Santiago Guerra.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;