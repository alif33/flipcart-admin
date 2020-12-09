import React from 'react';
import { BrowserRouter as Roueter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/index'
import Signin from './containers/Signin/index'
import Signup from './containers/Signup/index'
import Layout from './components/layout/index'

function App() {
  return (
      <Roueter>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/signin" component={ Signin }/>
          <Route path="/signup" component={ Signup }/>
        </Switch>
      </Roueter>
  );
}

export default App;
