// src/server.ts
import { app } from "./server";

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example server listening at http://localhost:${port}`)
);