import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Education extends Component {
  render() {
    return(
      <div className="education-section" style={{paddingTop: '30px'}}>
      <Row>
        <Col xs="4">
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Col>
        <Col xs="6">
          <h3 style={{marginTop:'0px', fontSize: '28px', fontWeight:'bold'}}>{this.props.schoolName}</h3>
          <p>{this.props.schoolDescription}</p>
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