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
          {dropDown.map(item => {
            return <Route exact path={item.link} component={item.pageName} />;
          })} 
            <Redirect to={homePage.link} />
      </Switch>
    </Router>
  );
}

export default App;
