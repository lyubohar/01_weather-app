const express = require('express')
const path = require('path') 

const app = express()

// Set paths 
const publicDirPath = path.join(__dirname, '../public') 
const weatherFilePath = path.join(__dirname, '../public/weather.html') 

app.use(express.static(publicDirPath)) 

// Routes 
app.get('/weather', (req, res) => {
    res.sendFile(weatherFilePath)
})

app.listen(3000, () => { 
    console.log('Server is up')
})
