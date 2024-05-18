import {app} from "./html-app";

app.get('/', (req, res) => {
    const html = res.render("homepage");
    return html;
  });
  
  app.get('/about', (req, res) => {
    const html = res.render("errorpage");
    return html;
  });