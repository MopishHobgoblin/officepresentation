import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'; 
import './App.css';
import { navLinks, homePage, dropDown } from '../../js/pageLinks';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path={homePage.link} component={homePage.pageName} />
          {navLinks.map(item => {
            return <Route exact path={item.link} component={item.pageName} />;
          })}
           {Object.keys(dropDown).map(key => {
            return <Route exact path={dropDown[key].link} component={dropDown[key].pageName} />;
          })} 
           {Object.keys(dropDown).map(key => {
            return <Route exact path={dropDown[key].progressLink} component={dropDown[key].progressPage}/>;
          })}
        }
            <Redirect to={homePage.link} />
      </Switch>
    </Router>
  );
}

export default App;
