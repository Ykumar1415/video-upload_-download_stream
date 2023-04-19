const fs = require("fs");
const path = require("../path");
const downloadcontroller = (req, res) => {
  const videoName = req.params.videoName;
  const videoPath = `${path}/videos/ ${videoName}`;

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const fileStream = fs.createReadStream(videoPath);

  res.setHeader("Content-Length", fileSize);
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Content-Disposition", "attachment; filename=" + videoName);

  fileStream.pipe(res);
};
module.exports = { downloadcontroller };
