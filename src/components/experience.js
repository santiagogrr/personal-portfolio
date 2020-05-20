import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';

class Experience extends Component {
  render() {
    return(
      <div className="experience-section" style={{paddingTop: '30px'}}>
      <Row>
        <Col xs="4">
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Col>
        <Col xs="6">
          <h3 style={{marginTop:'0px'}}>{this.props.jobName}</h3>
        </Col>
        <Col xs="2">
          <p>{this.props.city}</p>
        </Col>
      </Row>
      <Row className="work-info">
        <Col xs='8'>
        <ul>
          <li>{this.props.jobDescription1}</li>
          {this.props.jobDescription2 ? <li>{this.props.jobDescription2}</li>: null}              
          {this.props.jobDescription3 ? <li>{this.props.jobDescription3}</li>: null}
        </ul>
        </Col>
      </Row>
      </div>
      
    )
  }
}

export default Experience;