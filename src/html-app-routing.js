import {app} from "./html-app";

app.get('/', (req, res) => {
    console.log("homepage get requested");
    const html = res.render("homepage");
    return html;
  });
  
  app.get('/about', (req, res) => {
    console.log("About get request sent");
    const html = res.render("errorpage");
    return html;
  });