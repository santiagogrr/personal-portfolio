import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}         
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg) center / cover'}}>
            Task/Reward App
          </CardTitle>
          <CardText>
          Aimed to parents and kids with intellectual disabilities. This app is designed to be used by both the parent and the child at the same time. In this app, parents assign tasks for their children. When the child completes they receive points which can be redeemed for rewards.
          </CardText>
          <CardActions border>
            <a href="https://github.com/santiagogrr/effeta-app/" target="_blank" rel="noopener noreferrer">
              <Button colored>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg) center / cover'}}>
            Search Up App
          </CardTitle>
          <CardText>
          This app allows students and collaborators to search teachers and physical spaces of my university (University of Monterrey). This was made with the purpose of solving the problem at the university of lack of signals within the campus.
          </CardText>
          <CardActions border>
            <a href="https://github.com/santiagogrr/projectOne/" target="_blank" rel="noopener noreferrer">
              <Button colored>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg) center / cover'}}>
            Memory Game
          </CardTitle>
          <CardText>
          It's a memory game made with React Native. There are three levels of difficulty. The player has to find the matching country flag in the grid of cards. 
          </CardText>
          <CardActions border>
            <a href="https://github.com/santiagogrr/memorama/" target="_blank" rel="noopener noreferrer">
              <Button colored>Github</Button>
            </a>
          </CardActions>
        </Card>

        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
           {/* Project 1 */}         
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg) center / cover'}}>
              Unknown Unknown Detection
            </CardTitle>
            <CardText>
              Research based on designing a method that finds patterns in poorly classified points by a predictive model with the support of massive collaboration (crowdsourcing). These prediction errors have a high level of confidence and are known as "unknown unknowns".
            </CardText>
            <CardActions border>
              <a href="https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380306" target="_blank" rel="noopener noreferrer">
                <Button colored>Paper</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div className="projects-grid">
          {/* Project 1 */}         
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg) center / cover'}}>
              React Project 1 Description
            </CardTitle>
            <CardText>
              Lorem ipsum
            </CardText>
            <CardActions border>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <Button colored>Github</Button>
            </a>
            </CardActions>
          </Card>
        </div>
      )
    }
  }
  
  
  render(){
    return (
      <div className = "category-tabs">
        <Tabs activeTab ={this.state.activeTab} onChange={tabId => this.setState({activeTab:tabId})} ripple >
          <Tab>React Native</Tab>
          <Tab>Machine Learning Research</Tab>
        </Tabs>
        
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default Projects;