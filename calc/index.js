


const express = require('express')
const urlEncodedParser = express.urlencoded({ extended: false })

const app = express()
const tab = ['un','deux','trois'];

const obj = {
    a:1,
    b:2,
    c:3
}
app.get('/', function(req, res) {
    res.send('Hello world !')
})

app.get('/tab', function(req, res) {
    /*
    console.log(tab)
    tab[0]='a';
    tab[1]='b';
    tab[2]='c';

    console.log(tab)

    var i = tab.indexOf('b')
    tab[i]='z';

    console.log(tab)

    tab.unshift('a','b')
    tab.push('e')

    console.log(tab)

    tab.shift()
    tab.pop()

    console.log(tab)

    tab.splice(0,3)


    tab[0]='a';
    tab[1]='b';
    tab[2]='c';
    tab[3]='d';

    console.log(tab)

    tab.splice(1,2)

    console.log(tab)

    tab.splice(1,2,'b','c')

    console.log(tab)

    tab[0]='a';
    tab[1]='b';
    tab[2]='c';
    tab[3]='d';
    tab[4]='e';
    tab[5]='f';

    console.log(tab)

    const tab2 = tab.slice(1, 5)

    console.log(tab2)

    const tab3 = ['a', ...tab2,'e']
    console.log(tab3)

    var i = tab3.indexOf('b')
    console.log("Voici l'index de b : "+i)

    const students = [
        { name: 'John', money: 10 },
        { name: 'Todd', money: 25 },
        { name: 'Jack', money: 33 },
        { name: 'Walter', money: 18 }
    ]

    const somme = students.reduce((total, student) => total + student.money, 0)
    console.log(somme)



    res.send(tab3)

     */

    console.log(obj)
    obj.d = 4
    obj.e = 5

    res.send(obj)

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