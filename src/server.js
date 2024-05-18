import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

// Basic HTML template
const htmlTemplate = (reactDom) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>React Express Server</title>
  </head>
  <body>
    <div id="app">${reactDom}</div>
  </body>
  </html>
`;

// React components
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(htmlTemplate(content));
});

app.get('/about', (req, res) => {
  const content = renderToString(<About />);
  res.send(htmlTemplate(content));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});