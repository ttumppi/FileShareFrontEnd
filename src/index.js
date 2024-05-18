import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


const GetRequested = () =>{
  console.log("Get Request Has been made");
  useNavigate("/");
  return (<h1>Message Received</h1>);
}


const PageNameHeader = () => (
  <div className="header-grid">
    <div className="header-item">FileShare</div>
  </div>
);




const MainPage = () =>(
  <Router>
    <div>
      <PageNameHeader />
      <Routes>
        <Route exact path="/test" element={<GetRequested />} />
      </Routes>
    </div>
  </Router>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainPage />
);



