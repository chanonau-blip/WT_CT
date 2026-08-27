import {createServer} from "http"

const server = createServer((req,res)=>{
    switch (req.url) {
        case "/":
            res.writeHead(200,{"content-type": "text/html"});
            res.end("<h1>Hello CT Hello Hello Hello</h1>");
            break;
        case "/about":
            res.writeHead(200,{"content-type":"text/html" });
            res.end(`
                <h1>About ME</h1>
                <h2>CTEMU Team 2026</h2>
                <img src="https://i.pravatar.cc/150?imf=3" alt="ct"/>
                `);
        break;
    default:
        res.writeHead(404, {"content-type" : "text/html"});
        res.end("<h1> Not Found Page</h1>")
        break;
    }
});

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000

server.listen(port, host, ()=>{
    console.log(`Server running on http://${host}:${port}`);
});