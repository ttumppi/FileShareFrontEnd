import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, useNavigate, } from 'react-router-dom';

const ReactDOMServer = require("react-dom/server");
const express = require("express");

const expressApp = express();

expressApp.get("/test", (req, res) => {
  const html = ReactDOMServer.renderToString(
    <MainPageWithTest />
  );
  res.send(html);
});

expressApp.get("", (req, res) => {
  const html = ReactDOMServer.renderToString(
    <MainPage />
  );
  res.send(html);
});

const GetRequested = () =>{
  return (<h1>Message Received</h1>);
}


const PageNameHeader = () => (
  <div className="header-grid">
    <div className="header-item">FileShare</div>
  </div>
);




const MainPageWithTest = () =>(
    <div>
      <PageNameHeader />
      <GetRequested />
    </div>
);

const MainPage = () =>(
    <div>
      <PageNameHeader />
    </div>
);






