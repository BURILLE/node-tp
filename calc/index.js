


const express = require('express')
const urlEncodedParser = express.urlencoded({ extended: false })

const app = express()

const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

app.get('/', function(req, res) {
    res.send('Hello world !')
})

app.get('/tab', function(req, res) {

    //--- introduction  Asynchrone

    /*
    fs.readFile('./text.txt', 'utf8', (err, filename) => {
        if (err) throw err
        console.log(filename)
        //fs.readFile(`./${filename}`, 'utf8', (err, data) => {
        fs.readFile('./'+filename.trim(), 'utf8', (err, data) => {
            if (err) throw err
            console.log(data)
        })

    })

     */

    // --- Promise



    function handleSuccess(data) {
        console.log(data)
    }

    function handleError(err) {
        console.error(err)
    }

    // si on recupere pas une erreur on appel la 1er fonction sinon on appel la seconde
    readFile('./doesnotexist.txt', 'utf8').then(handleSuccess, handleError)



    res.send("hello")

})



app.post('/form', urlEncodedParser, function(req, res) {
    console.log(req.body)
    res.send('form')
    // on envois ça sur l'url de form
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
/*
const express = require('express')
const app = express()
var session = require('express-session')

app.use(session({ secret: 'keyboard cat', cookie: { views: 10 }}))
app.get('/', function(req, res) {

    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('Hello ! you already visited this route ' + req.session.views + ' time(s)')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }

    //res.send('Hello ! you already visited this route ' + 0 + ' time(s)')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

 */


/*
const express = require('express')
const app = express()

const calc = require('./node_modules/calc')


app.get('/hello/:name', function(req, res) {
    const resultat = calc.sum(1,3)

    //url: http://localhost:3000/hello/cecile
    res.send('Hello ' + req.params.name + '!'+'<p>The result is '+resultat+'</p>')
    //recpere une partir de url afin de trouver le nom de l'utilisateur


    console.log(`The result is ${resultat}`)

})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
    //on ouvre localhost:3000 -> affiche "hello World"


})

app.use(function(req, res, next) {
    console.log('Time:', Date.now())
    //on affiche le temps actuel
    next()
})

*/

/*
const calc = require('./calc')

const resultat = calc.sum(1,3)
console.log(`The result is ${resultat}`)


*/