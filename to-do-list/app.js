const express = require('express')
const checkListRouter = require('./src/routes/checklist')

const app = express()
app.use(express.json())

app.use('/checklists', checkListRouter)


// // PARA DEVOLVER RESPOSTAS EM FORMATO JSON
// app.get('/json' , (req , res) => {
//     res.json({title: 'lavar a louça', done: true})
// })

app.listen(3000 , () => {
    console.log('Servidor no ar')
})