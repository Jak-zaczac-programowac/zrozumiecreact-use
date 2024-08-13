const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

server.use((req, res, next) => {
    req.db = router.db;
    next();
});

server.get("/comments", (req, res) => {
    const comments = req.db.get("comments").value();
    const filteredComments = comments.map(
        ({ id, name, comment, createdAt }) => ({
            id,
            name,
            comment: comment.substr(0, 100),
            createdAt,
        })
    );
    res.jsonp(filteredComments);
});

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
