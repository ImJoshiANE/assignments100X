// Importing the fs module
const fs = require("fs");

// Function to read a txt file
const readTxt = (file, startTime) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);

    const endTime = process.hrtime(startTime);
    console.log(`Time to execute is ${endTime[0]} seconds and ${(endTime[1]) / 1000000} milliseconds`);
});
};

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

// Function to check if a file exists
const doesExist = (file) => {
  fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("File does not exist");
      return;
    }
    console.log("File exists");
  });
};

// Driver Program
// setTimeout(() => readTxt("file1.txt"), 0); // Reading the file
// setTimeout(() => writreTxt("file1.txt", "bjaf lauf awf"), 500); // Writing on the same file
// setTimeout(() => readTxt("file1.txt"), 1000); // Reading again after writing on this file
// setTimeout(() => doesExist("file2.txt"), 1500);

// To check async nature of readfile
const startTime = process.hrtime();
readTxt("file1.txt", startTime);

let ans = 0;
for(let i=1; i<=1000000000; i++){
    ans += i;
}