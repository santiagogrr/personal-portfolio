import React, {Component} from 'react';
import { Row, Col, Button } from 'reactstrap';
import {Grid, Cell} from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills'

import Profile from '../assets/Pshop_1139.png'
import File from '../assets/New_CV.pdf'


class Resume extends Component {
  render(){
    return (
      <div style={{padding: '2em'}}>
      <Grid className="contact-body">
        <Row>
            <Cell align='center'>
              <h1>Resume</h1>
            </Cell>
          </Row>
          <Row>
            <Cell col={4}>
              <div style={{textAlign:'center'}}>
                <img 
                  src={Profile} 
                  alt='profile'
                  style={{height: '200px'}}
                />   
              </div>  
              <h2 style={{paddingTop:'10px'}}>Santiago Guerra</h2>
              <h4 style={{color:'grey'}}>Software Developer</h4>
              <hr style={{borderTop: '3px solid #6D597A', width: '50%'}}/>
              <p style={{fontSize: '16px'}}>Hello, my name is Santiago. I'm an aspiring full-stack developer with experience in React, React Native, Python, Oracle SQL and MongoDB.</p>
              <p style={{fontSize: '16px'}}>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS.</p>
              <h4 style={{color:'grey'}}>Skills</h4>
              <hr style={{borderTop: '3px solid #6D597A', width: '50%'}}/>
              <div className='skill-section'>
                <Row>
                  <Col xs={4}>
                    <p>React</p>    
                    <p>HTML/CSS</p>              
                  </Col>
                  <Col xs={4}>
                    <p>React Native</p>      
                    <p>Javascript</p>             
                  </Col>
                  <Col xs={4}>
                    <p>Python</p>   
                    <p>Java</p>                  
                  </Col>
                </Row>
              </div>
              <hr style={{borderTop: '3px solid #6D597A', width: '50%'}}/>
              <a href={File} target="_blank" rel="noopener noreferrer" download>
                <Button color="primary">
                    <i className="fa fa-download"/>
                    <span> </span> Download CV
                </Button>
              </a>

            </Cell>
            <Cell col={8} className="resume-right-col">
              <h2 style={{fontWeight:"bold"}}>Education</h2> 
              <Education 
                startYear="Sep 2021"
                endYear="Apr 2023"
                schoolName="Centrale Lille"
                schoolDescription="Master in Data Science"
                city="Lille, France"
              />
              <Education 
                startYear="Jan 2016"
                endYear="Dec 2019"
                schoolName="Universidad de Monterrey"
                schoolDescription="Bachelor of Science in Computer Science"
                city="Monterrey, Mexico"
              />

              <hr style={{borderTop: '3px solid #E56B6F'}} />

              <h2 style={{fontWeight:"bold"}}>Work Experience</h2> 
              <Experience
                startYear="Jun 2020"
                endYear="May 2021"
                jobName="Software Developer, Dual Systems"
                jobDescription1="Implemented modern web designs through React and SASS in
                customer’s companies."
                city="Monterrey, Mexico"
              />
              <Experience
                startYear="May 2019"
                endYear="Sep 2019"
                jobName="Research Assistant In Human AI, University of Michigan"
                jobDescription1="Integrated novel method of using human-beat-the-machine machine learning classiﬁer data that ﬁnds unknown unknowns with crowd-sourcing algorithms."
                jobDescription2="Developed a user interface with MeteorJS for crowd-workers to create labels for crowdsourcing algorithms."
                city="Ann Arbor, USA"
              />
              <Experience
                startYear="Oct 2018"
                endYear="Jan 2019"
                jobName="Software Engineer Intern, Sora"
                jobDescription1="Increased the startup potential by collaborating in the development of a system that automates the signing of contracts."
                jobDescription2="Improved visibility and identity by updating the webpage."
                city="Monterrey, NL"
              />
              <Experience
                startYear="Oct 2018"
                endYear="Jan 2019"
                jobName=" 
                Professional Experience Coordinator, AIESEC UDEM"
                jobDescription1="Developed international relations by reviewing audits, scholarships, immigration procedures and guided professional experiences"
                city="Monterrey, NL"
              />

              <hr style={{borderTop: '3px solid #E56B6F'}} />

              <h2 style={{fontWeight:"bold"}}>Volunteering Experience</h2> 
              <Experience
                startYear="May 2017"
                endYear="Jul 2017"
                jobName="Xploregy Member"
                jobDescription1="Developed social media and digital content to increase awareness and excitement for Egypt’s most popular and touristic places via sharing videos, experience stories, and photos."
                city="Cairo, Egypt"
              />

              <Experience
                startYear="May 2017"
                endYear="Aug 2018"
                jobName="Community Team Member, TECHO"
                jobDescription1="Promote the development of skills and abilities generating a continuous methodology in collaboration between volunteers and community."
                city="García, NL"
              />

              <hr style={{borderTop: '3px solid #E56B6F'}} />

              <h2 style={{fontWeight:"bold"}}>Languages</h2> 
              <Skills
                skill="Spanish"
                progress={100}
              />
              <Skills
                skill="English"
                progress={90}
              />
              <Skills
                skill="French"
                progress={60}
              />
            </Cell>
          </Row>

      </Grid>
      </div>
    );
  }
}

export default Resume;
