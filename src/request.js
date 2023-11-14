const request = require("request");

request("http://api.kanye.rest", (error, response, body) => {

  if (error) {
    console.log("error: ", error.message);
    return;
  }

  console.log(response.statusCode, response.statusMessage);
  console.log(body);
});