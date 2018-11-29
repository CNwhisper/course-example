'use strict';

var MY_ENVIR = process.env.MY_ENVIR;

exports.handler = function(event, context, callback) {

  var sc; // Status code
  var result = ""; // Response payload

  if (event.body) {
    event = JSON.parse(event.body);
  }

  if (! MY_ENVIR){
    console.log("you can add GLOBAL environment variables on lambdda editor.");
  }else{
    console.log("global environment setup success. [MY_ENVIR="+ MY_ENVIR +"]");
  }

  console.log(event);

  if (event.x && event.y){

    let x = event.x;
    let y = event.y;

    result = {
      "result": (x+y)
    }

  }else{
    sc = 400;
    result = {
      "result": "x,y can't been null."
    }
  }


  const response = {
    statusCode: sc,
    headers: { "Content-type": "application/json" },
    body: JSON.stringify( result )
  };

  callback(null, response);


};