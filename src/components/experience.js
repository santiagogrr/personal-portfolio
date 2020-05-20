import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';

class Experience extends Component {
  render() {
    return(
      <div style={{paddingTop: '10px'}}>
      <Row>
        <Col xs="4">
          <p style={{fontSize: '18px'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Col>
        <Col xs="6">
          <h3 style={{marginTop:'0px'}}>{this.props.jobName}</h3>
          <ul>
              <li style={{fontSize: '16px'}}>{this.props.jobDescription1}</li>
              {this.props.jobDescription2 ? <li style={{fontSize: '16px'}}>{this.props.jobDescription2}</li>: null}              
              {this.props.jobDescription3 ? <li style={{fontSize: '16px'}}>{this.props.jobDescription3}</li>: null}
          </ul>
        </Col>
        <Col xs="2">
          <p>{this.props.city}</p>
        </Col>
      </Row>
      </div>
    )
  }
}

export default Experience;