import React, {Component} from 'react';
import { Form, FormGroup, Input, Label, Container, Row, Col, Button } from 'reactstrap';
import Axios from 'axios';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({
      disabled: true,
    });

    console.log(this.state.disabled)

    Axios.post('http://localhost:3030/api/email',this.state)
        .then(res =>{
          if(res.data.success){
            this.setState({
              disabled: false,
              emailSent:true
            });
          } else {
            this.setState({
              disabled: false,
              emailSent: false
            })
          }
        })
        .catch(err => {
          console.log(err);

          this.setState({
            disabled: false,
            emailSent: false
          });
        });
  };
  
  copyCodeToClipboard = () => {
    const el = this.p
    el.select()
    document.execCommand("copy")
  }
  
  render(){
    return (
      <div className = "contact-body">
        <Container>
          <Row>
            <Col align='center'>
              <div>
                <h1>Let's Talk</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <div className = "contact-description">
                <h2>Have some questions?</h2> 
                  <i className = 'fa fa-envelope-open-o' aria-hidden="true"/>
                  <p style={{width:'75%', paddingTop: '0.5em'}}>
                    Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </p>
                  <p style={{paddingTop: '20px'}}>Need help?</p>
                  <div className="input-section">
                    <input
                    style={{border: 'none',marginBottom: '15px',fontWeight: 'bold', width:'100%'}}
                    ref ={(p) =>this.p = p}
                    value= "santiagog94@gmail.com"
                    />
                  </div>
                <div>
                  <Button color="primary" onClick={() => this.copyCodeToClipboard()}>
                    Copy
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6"> 
              <div className = 'contact-list'>
                <h2>Contact Me</h2> 
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="name">Name:</Label>
                      <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}                
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email:</Label>
                      <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}                
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="message">Message:</Label>
                      <Input
                        type="textarea"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}                
                      />
                    </FormGroup>
                    <Button type="submit" disabled={this.state.disabled}>Submit</Button>
                    {this.state.emailSent === true && <p style={{color:"#57a773"}}>Email Sent</p>}
                    {this.state.emailSent === false && <p style={{color:"#ee6352"}}>Email Not Sent</p>}

                </Form>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;