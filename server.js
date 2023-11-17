const express = require("express");
const server = express();
const PORT = 3000;

server.use(express.json());
server.use("/", require("./Router/router.js"));

server.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
})