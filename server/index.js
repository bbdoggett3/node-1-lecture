const express = require('express')
const app = express()
const controller = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())    //important to remember

app.use(function(req, res, next) {
    console.log("We got a request cap'n")
    next()
})

//endpoints, requests you are able to get
app.get('/api/ben', (req, res) => {       //request, response
    res.status(200).send('Ben')
})

app.get('/api/users', controller.getAllUsers)
app.get('/api/users/:user_id', controller.getUserById)
app.post('/api/users', controller.createUser)
app.put('/api/users/user_id', controller.editUser)
app.delete('/api/users/:user_id', controller.deleteUser)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))