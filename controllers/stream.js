const fs = require("fs");
const path = require("../path");
const range = require("range-parser");

const streamcontroller = (req, res) => {
  const videoName = req.params.videoName;
  const videoPath =`${path}/videos/ ${videoName}`;

  fs.stat(videoPath, function (err, stats) {
    if (err) {
      console.log(err);
      return res.status(404).send("Video not found!");
    }

    // Set up headers for partial content
    const { size } = stats;
    const rangeRequest = req.headers.range;
    if (rangeRequest) {
      const { start, end } = range.parse(rangeRequest, size);
      const chunkSize = end - start + 1;

      // Set headers for partial content
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": "video/mp4",
      });

      // Create a stream for the partial content
      const stream = fs.createReadStream(videoPath, { start, end });
      return stream.pipe(res);
    }

    // Set headers for entire content
    const head = {
      "Content-Length": size,
      "Content-Type": "video/mp4",
    };

    res.writeHead(200, head);
    const stream = fs.createReadStream(videoPath);
    return stream.pipe(res);
  });
};
module.exports = { streamcontroller };
