/*
It should take two command line arguments:
a URL
a local file path

It should download the resource at the URL to the local path on your machine. 
Upon completion, it should print out a message like Downloaded and 
saved 1235 bytes to ./index.html.
*/
const fs = require("fs");
const request = require("request");

const inputs = process.argv.splice(2);

const URL = inputs[0];
const FILE_PATH = inputs[1];

request(URL, (error, response, body) => {
  fs.writeFile(FILE_PATH, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    const fileSize = response.headers["content-length"];
    console.log(`Downloaded and saved ${fileSize} bytes to ${FILE_PATH}.`);
  });
});

/*
Optional Edge Cases
What should happen if: 
1. the local file already exists? 
2. the local file path given is invalid? 
3. the URL results in an error or non-200 result
*/

//node fetcher.js http://www.example.edu/ ./index.html
