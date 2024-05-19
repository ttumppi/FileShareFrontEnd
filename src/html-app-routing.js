import {app} from "./html-app.js";

app.get('/', (req, res) => {
    res.render("homepage");
  });
  
  app.get('/debug', (req, res) => {
    res.render("errorpage");
  });

