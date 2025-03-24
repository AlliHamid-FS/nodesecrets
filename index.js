require("dotenv").config("./.env");


const secretKey = "hamidAlli-secret-key-123"; 



console.log("My secret key is showing.\n");
console.log("Secret Key:", secretKey);


const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Secret Key: ${secretKey}`);
    
    
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});