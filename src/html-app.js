import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';



const EmptyJsonCorrector = (req, res, next) =>{
    if (req.body === ""){
        req.body = {};
    }
    next();
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(EmptyJsonCorrector);





export {app};