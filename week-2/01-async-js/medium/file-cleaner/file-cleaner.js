// Importing the fs module
const fs = require("fs");

// Function to write a txt file
const writreTxt = (file, text) => {
    fs.writeFile(file, text, "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been written");
    });
  };

// Function to read a txt file
const readTrimWrite = (file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    const cleanedString = data.trim().replace(/\s+/g, ' ');
    console.log(cleanedString);

    writreTxt(file, cleanedString);
  });
};

readTrimWrite("myfile.txt");