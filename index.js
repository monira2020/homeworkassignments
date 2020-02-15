'use strict';
console.log("Loading Monisha's baby calculator!");
 
exports.handler = async (event) => {
//where a is the first integer and b is the second integer parameter
    let a = "a";
    let b = 'b';
    let responseCode = 200;
    console.log("request: " + JSON.stringify(event));
    // defining parameters and if received necessary parameters -> parseFloat the string value to an integer
    if (event.queryStringParameters && event.queryStringParameters.a) {
        console.log("Received a: " + event.queryStringParameters.a);
        a = parseFloat(event.queryStringParameters.a);
    }
    
   
    //see above comment
    if (event.queryStringParameters && event.queryStringParameters.b) {
        console.log("Received b: " + event.queryStringParameters.b);
       b = parseFloat(event.queryStringParameters.b);
    }
 //calculations
    let calculatedvalue1 = a+b;
    let calculatedvalue2 = a*b;
    let calculatedvalue3 = a/b;
//what gets returned as "c"
    let responseBody = {
        messageaddition: calculatedvalue1,
        messagemultiplication: calculatedvalue2,
        messagedivision: calculatedvalue3,
        input: event
    };
    
    // JSON output
    let response = {
        statusCode: responseCode,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};