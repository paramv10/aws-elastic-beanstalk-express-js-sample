const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('trying to commit something new - learnig how to do forking and pushing onto GitRepository.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
