'use strict';
const aws = require('aws-sdk');

exports.handler = function(event ,context ,callback){

  let html = `<head>
  <title>Welcome to AWS Lambda !</title>
  <style>
    html, body {
      font-family: arial; color:red;
      text-align: center;
      margin-top: 30px;
    }
  </style>
  </head>
  <body>
  <h1>Welcome to AWS Lambda ! , my name is : #name#</h1>
  </body>
  </html>`;
  


  aws.config.update({ region: 'ap-northeast-1' });
  let db = new aws.DynamoDB({ apiVersion: '2012-08-10' });
  let params = {
      Key: {
        "firstname": { S: 'noah' }
      }
      ,TableName: 'demo'
    };
  let getter =  db.getItem(params).promise().then(function(data) {return data});
  Promise.all([getter]).then(function(values) {
    let data = values[0];
    let name = '';
    if (data && data.Item && data.Item.firstname && data.Item.firstname.S){
      name = data.Item.firstname.S + " " + data.Item.lastname.S ;
    }else{
      name = "(null)";
    }
    
    html = html.replace('#name#',name);
    
    let response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
      body: html,
    };
    
    
    callback(null,response);
    context.succeed();
  });

}
