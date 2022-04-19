import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
