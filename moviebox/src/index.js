const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
// const port = 3300
// const PORT = process.env.PORT;
 const PORT = 3300

const videoPath = path.join("./videos", "SampleVideo_1280x720_1mb.mp4");


app.get("/", (req,res) => {
    res.send("Hello, World!!!");
});

app.get("/video", (req, res) => {

    //
    // Original video from here:
    // https://sample-videos.com
    //
    fs.stat(videoPath, (err, stats) => {docker kill