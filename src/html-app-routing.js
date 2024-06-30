import {app} from "./html-app.js";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    res.render("login");
  });
  
app.get('/debug', (req, res) => {
    res.render("errorpage");
  });

app.post('/files', jsonParser, (req, res) => {
  if (req.body){
    res.render("homepage", {files: req.body});
  }
  else{
    res.render("homepage");
  }
});

