import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'


const App: React.FC = () => {
  return (
    // <div className="App" style={{
    //   backgroundImage:
    //     `url(${require('../src/assets/img/background.jpg').default})`
    // }}>
      <Router>
        <Switch>
          <Route component={Home} path='/' />
        </Switch>
      </Router>
    // </div>
  )
}

export default App;
