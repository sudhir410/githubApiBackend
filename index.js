const express = require('express'); 
const mongoose = require('mongoose')
const app = express()


mongoose.connect('mongodb+srv://cmanager124:cmanager124@cluster0.9uvvjcb.mongodb.net/contactManager?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Database connected')
    }
})




app.get('*', (req, res) => {
    res.status(404).send("404 Page Not Found")

})

app.listen(process.env.PORT || 8080, () => { console.log(`server started on port : http://localhost:8080/`) })