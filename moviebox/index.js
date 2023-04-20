const express = require("express");
const fs = require("fs");

const app = express();
// const port = 3300
const PORT = process.env.PORT;

app.get("/", (req,res) => {
    res.send("Hello, World!!!");
});

app.get("/video", (req, res) => {

    //
    // Original video from here:
    // https://sample-videos.com
    //
    const path = "./videos/SampleVideo_1280x720_1mb.mp4";
    fs.stat(path, (err, stats) => {
        if (err) {
            console.error("An error occurred ");
            res.sendStatus(500);
            return;
        }

        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });
        fs.createReadStream(path).pipe(res);
    });
});

app.listen(PORT, () => {
    console.log(`First example app listening on port ${PORT}, point your browser at http://localhost:3300`);
}

);