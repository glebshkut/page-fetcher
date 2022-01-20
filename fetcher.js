const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);


const content = request(args[0], (error, response, body) => {
  if (error !== null) {
    console.log(error);
    return;
  }
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
    countBytes(body);
  });
});

const countBytes = (item) => {
  console.log(`Downloaded and saved ${item.length} bytes to ${args[1]}`);
}




