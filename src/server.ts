// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./routes";
import { HashTable } from "./hash";

export const app = express();

// Use body parser to read sent json payloads
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

RegisterRoutes(app);

app.get('/.status', function (_, res, __) {
    res.json({
        ok: true
    });
});
