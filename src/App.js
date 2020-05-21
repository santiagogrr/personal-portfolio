import React, { useEffect } from 'react';
import './App.css';
import Main from './components/main'
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { HashRouter, Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


function App() {
    useEffect(() => {
        ReactGA.initialize('UA-167311067-1');
        ReactGA.pageview(window.location.pathname + window.location.search); // Record a pageview for the given page
    
      }, [])
      
  return (
    <HashRouter basename="/">
      <div className="demo-big-content">
          <Layout>
              <Header className='header-color' title={<Link style={{fontWeight:'500', color: 'white', fontSize: '24px'}} to="/">My Portfolio</Link>} scroll>
                  <Navigation>
                      <Link style={{fontSize:'24px'}} to="/resume">Resume</Link>
                      <Link style={{fontSize:'24px'}}  to="/projects">Projects</Link>
                      <Link style={{fontSize:'24px'}}  to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{fontWeight:'bold', color: 'grey', fontSize: '24px'}} to="/">My Portfolio</Link>}>
                  <Navigation>
                      <Link style={{fontSize:'24px'}} to="/resume">Resume</Link>
                      <Link style={{fontSize:'24px'}} to="/projects">Projects</Link>
                      <Link style={{fontSize:'24px'}} to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
              <Footer />
          </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
