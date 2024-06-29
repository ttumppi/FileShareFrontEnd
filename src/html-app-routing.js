import {app} from "./html-app.js";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    console.log("received index request");
    res.render("login");
  });
  
app.get('/debug', (req, res) => {
    res.render("errorpage");
  });

app.post('/files', jsonParser, (req, res) => {
  console.log(req.body);
  res.render("errorpage");
});

