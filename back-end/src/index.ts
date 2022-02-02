import express, { json, urlencoded } from "express";
import errorHandler from "./middlewares/errorHandler";
import registroRouter from "./routes/registro";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(registroRouter);

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Aplicação executando em:");
  console.log("http://localhost:5000/");
});
