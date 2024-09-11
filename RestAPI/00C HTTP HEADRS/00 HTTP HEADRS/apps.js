const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Parse JSON requests

app.get('/headers', (req, res) => {
  // Get a specific header value
  const userAgent = req.get('user-agent');
  
  // Set custom response headers
  res.set('X-Custom-Header-JawdatMoussa', 'Hello from API SERVER01 used in customer header');

  res.json({ userAgent });
});

/*
Content-Type
Set the content type of the response to indicate the type of data being returned.
*/

app.get('/text', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('This is a plain text response');
});

/*
Authorization
Check for a basic authorization header to provide access to a resource.
*/

app.get('/protected', (req, res) => {
  const auth = req.headers.authorization;
  if (auth === 'Basic dXNlcjpwYXNzd29yZA==') { // Base64 encoding of "user:password"
    res.send('Access Granted');
  } else {
    res.status(401).send('Access Denied');
  }
});



/*
Set-Cookie
Used by servers to send cookies back to the client. It helps in managing session state or user preferences.
*/
app.get('/set-cookie', (req, res) => {
  res.cookie('sessionId', '123456', { httpOnly: true, secure: true });
  res.json({ message: 'Cookie is set' });
});

/*
Cache-Control
Instruct the browser to not cache the response.
*/

app.get('/nocache', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.send('This response will not be cached');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

