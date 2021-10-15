const express = require('express')
const app = express()

const port = 3000;
let d = new Date();
let serverTime = d.toLocaleString();

let helloString = 'Hello World! The Time is ';

app.get('/countWords/:str', function (req, res)
{
    let str = req.params["str"];
    let count = getWordCount(str);
    let countString = `Hello, I got a text with ${count} words`;
    res.send(countString);
})

app.get('/reverse/:str', function (req, res) {
    let str = req.params["str"];
    let reversed = reverse(str);
    res.send(reversed);
})

app.get('/', function (req, res) {
    res.send(getServerTime(serverTime));
})

app.listen(port);
console.log(`App running on port ${port}`);

let getServerTime = function(time){
    return helloString + time;
}

let getWordCount = (str) => str.split(' ').length;

let reverse = (str) => {
    return str.split(' ').reverse().join(' ');
}

exports.getServerTime = getServerTime;
exports.helloString = helloString;
exports.getWordcount = getWordCount;
exports.reverse = reverse;