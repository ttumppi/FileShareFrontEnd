import {app} from "./html-app.js";

app.get('/', (req, res) => {
    res.render("login");
    console.log("homepage requested");
  });
  
app.get('/debug', (req, res) => {
    res.render("errorpage");
  });

app.post('/files', (req, res) => {
  console.log(req.body);
  res.render("errorpage");
});

