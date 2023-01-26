const express = require('express')
const util = require("util");
const fs = require("fs");
const app = express()

const axios = require("axios")


const nunjucks = require('nunjucks')


app.get('/myspecialusers',async function(req, res) {

    const user1 = axios.get('https://jsonplaceholder.typicode.com/users/1')
    const user2 = axios.get('https://jsonplaceholder.typicode.com/users/4')
    const user3 = axios.get('https://jsonplaceholder.typicode.com/users/6')

    const [response1, response2, response3] = await Promise.all([user1, user2, user3])

    const reponse = await nunjucks.render('index.html', {
        user1: response1.data,
        user2: response2.data,
        user3: response3.data

    })

    res.send(reponse)


})


app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})