const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const projectsRoute = require('./routes/projects.router');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/projects', projectsRoute);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
