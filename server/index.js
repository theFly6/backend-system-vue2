const express = require('express')

const app = express()

app.use(express.static('../dist'))

app.listen(8080, err => {
    if (!err)
        console.log('Server is running at http://127.0.0.1:8080')
})