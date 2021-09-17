import React, { Component } from 'react';
import { Progress, Row, Col, Container } from 'reactstrap';

class Skills extends Component {
  render() {
    return(
      <Container>
          <Row >
              <Col xs="4">
              <p style={{textTransform: 'uppercase'}}>{this.props.skill}</p>

              </Col>
              <Col xs="6">
              <Progress
                style={{ width: '100%'}} 
                value={this.props.progress} 
                > 
                {this.props.progress}%
                </Progress>      
              </Col>
          </Row>

      </Container>
    )
  }
}

export default Skills;