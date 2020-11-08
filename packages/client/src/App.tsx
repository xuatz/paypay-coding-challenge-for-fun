import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <LoginForm />
  ) : (
    <Router>
      <div>
        <Switch>
          <Route path="/admin/employees">
            <h1>List of Employees</h1>
          </Route>
          <Route path="/admin/reviews">
            <h1>List of Performance Reviews</h1>
          </Route>
          <Route path="/reviews">
            <h1>List of Performance Reviews assigned for feedback</h1>
          </Route>
          <Redirect to="/reviews" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
