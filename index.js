// Creating my server
const express = require('express');
const bodyParser = require('body-parser')

const PORT = 3000

let app = express();

// app.get('/', (req, res) => {
//     res.send("Finally I am ALIVE!!!");
// });

//this is where we are going to getch our html from
const root = '/public'
//tell express to use the static middleware,
app.use(express.static(__dirname + root));

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});