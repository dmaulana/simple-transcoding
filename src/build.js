const wget = require("node-wget-promise");
const fs = require("fs");
const path = require("path");

const shakaVersion = "2.4.1";

const packageNames = ["packager-linux", "packager-osx", "packager-win.exe"];

var downloadUrl =
  "https://github.com/google/shaka-packager/releases/download/v" +
  shakaVersion +
  "/";

downloadShaka = () => {
  fs.mkdir(path.join(__dirname, "bin"), err => {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
  });

  packageNames.forEach(packageName =>
    wget(`${downloadUrl}${packageName}`, {
      output: path.join(__dirname, `bin/${packageName}`)
    })
  );
};

downloadShaka();
