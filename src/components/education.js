import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Education extends Component {
  render() {
    return(
      <div style={{paddingTop: '10px'}}>
      <Row>
        <Col xs="4">
          <p style={{fontSize: '18px'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Col>
        <Col xs="6">
          <h3 style={{marginTop:'0px'}}>{this.props.schoolName}</h3>
          <p style={{fontSize: '18px'}}>{this.props.schoolDescription}</p>
        </Col>
        <Col xs="2">
          <p>{this.props.city}</p>
        </Col>
      </Row>
      </div>
    )
  }
}

export default Education;