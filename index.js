const express = require('express')
const route = require('./route');
const app = express();
app.use(express.json());
// It parse incoming Request Object if strings or arrays
// extended[boolean]: This option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded
app.use(express.json({ urlencoded: false }));
app.use(route);
app.listen(9000, () => {
    console.log('Application listening on port 9000');
});

