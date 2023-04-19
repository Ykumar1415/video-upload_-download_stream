const path = require("../path");

const uploadcontroller = (req, res) => {
  if (!req.files || !req.files.video) {
    return res.status(400).send("No video file uploaded!");
  }

  const videoFile = req.files.video;
  const fileName = videoFile.name;
  const filePath = `${path}/videos/ ${fileName}`;

  // Save the file to disk
  videoFile.mv(filePath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send("Video file uploaded!");
  });
};
module.exports = { uploadcontroller };
