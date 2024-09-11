/* explaiing the code apps.js

The sequence of events is designed to demonstrate how to both retrieve a request header ('user-agent') 
and set a custom response header ('X-Custom-Header') using Express.js.
 By placing these steps in this sequence, the code illustrates how to work with headers on both the 
 client's request and the server's response.


The sequence of events in the code provided is related to how HTTP headers are exchanged between the client 
(usually a web browser, tool, or API client) and the server (your Express.js application). 
Let's break down each step to understand why they are ordered in this way:
// Get a specific header value
*/
const userAgent = req.get('user-agent');
/*
In this step, the code retrieves the value of a specific request header called 'user-agent'. 
The 'user-agent' header contains information about the client making the request, 
typically including details about the browser, operating system, and device. 
By retrieving this header value using req.get('user-agent'), 
you can access information about the client making the request.
*/
// next : Set custom response headers
res.set('X-Custom-Header', 'Hello from Jawdat Moussa used in customer header');
/*
After obtaining the 'user-agent' header value, the code sets a custom response header named 'X-Custom-Header'. 
Custom response headers are used to provide additional information in the server's response to the client. 
In this case, the custom header contains a message from "API SERVER01" that will be sent back to the client 
as part of the response.
*/
res.json({ userAgent });

/*
Finally, the code responds to the client with a JSON object containing the 'userAgent' value that was obtained earlier. 
This JSON response is sent along with any custom response headers that were set. 
The response will look something like this:


{
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"
  }
  
*/
