import express from "express";
import cors from "cors";

import SocketIO from "./socket";
import TCP from "./tcp";
import { createServer } from "http";
import SocketManager from "./socketManager";

const corsOptions = { origin: "*" };
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

const http = createServer();
http.listen(1234);

const manager = new SocketManager();
manager.init();
