
const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
    //on ouvre localhost:3000 -> affiche "hello World"
})


/*

const calc = require('./calc')

const resultat = calc.sum(1,3)
console.log(`The result is ${resultat}`)

 */
