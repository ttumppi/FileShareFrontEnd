import {app} from "./html-app.js";


app.get('/', (req, res) => {
    console.log("received index request");
    res.render("login");
  });
  
app.get('/debug', (req, res) => {
    res.render("errorpage");
  });

app.post('/files', (req, res) => {
  console.log(req.body);
  res.render("errorpage");
});

