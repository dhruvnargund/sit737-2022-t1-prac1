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


/** bodyParser.urlencoded(options)
* Parses the text as URL encoded data (which is how browsers tend to send form data from 
regular forms set to POST)
* and exposes the resulting object (containing the keys and values) on req.body
*/
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get("/test", function (request, response) {
    let param = request.query.username
    console.log('Get requested by ' + param)
    response.send('Thank you for requesting our Get Service')
})

app.post('/test', function (request, response) {
    console.log(request.body)
    let data = request.body;
    console.log('Post requested, here is the data :' + data)
    response.send('Thank you for requesting our Post Service')
})


app.post("/add", function (req, res) {
    console.log(req.body);
    var num1, num2, total = 0;
    num1 = +req.body.num1;
    num2 = +req.body.num2;
    total = num1 + num2;
    console.log(total);
    res.send("The result of the calculation is " + total);
});

app.get("/add", function (req, res) {
    console.log(req.body);
    var num1, num2, total = 0;
    num1 = +req.body.num1;
    num2 = +req.body.num2;
    total = num1 + num2;
    console.log(total);
    res.send("The result of the calculation is " + total);
});

// app.post("/add", function (req, res) {

//     let num1, num2, total = 0;
//     consol.log(req.body.num2)
//     num1 = parseInt(req.body.num1);
//     num2 = parseInt(req.body.num2);
//     total = num1 + num2;
//     console.log(total);
//     res.send("The result of the calculation is " + total);

// });


app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});