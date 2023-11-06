// criação de arquivos

const fs = require('fs')

//cria um arquivo novo, esse metodo vai sobreescrever os dados existentes no arquivo sinalizado
fs.writeFile('test.txt' , 'hello world', err => {
    console.log(err)
})

//cria um arquivo novo, esse metodo não vai sobreescrever os dados existentes no arquivo sinalizado
fs.appendFile('test2.txt' , 'hello world - ', err => {
    console.log(err)
})

//vai renomear um arquivo indicado
fs.rename('test2.txt' , 'renomeado', err => {
    console.log(err)
})

//vai remover um arquivo indicado
fs.unlink('test2.txt', err => {
    console.log(err)
})

