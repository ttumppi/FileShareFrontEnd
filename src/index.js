import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


const GetRequested = () =>{
  <h1>Message Received</h1>;
}


const TestElement = () => {
  <div className="header-grid">
    <div className="header-item">FileShare</div>
  </div>
}




const MainPage = () =>{
  <Router>
    <div>
      <TestElement />
      <Routes>
        <Route exact path="/test" component={GetRequested} />
      </Routes>
    </div>
  </Router>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainPage />
);



