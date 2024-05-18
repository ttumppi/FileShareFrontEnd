import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

const testElement = 
<div className="header-grid">
  <div className="header-item">FileShare</div>
</div>

const route =
<div>
  <Route exact path="/test" component={<h1>Message Received</h1>} />
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  testElement,
  <Router>
    route
    </Router>
);



