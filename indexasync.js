var fs = require('fs')

var data = fs.readFile('../public/index.html', function (err, data){
  if(err){
    return console.log("no se pudo abrir el archivo"+err.message)
  }
  console.log(data.toString().length)
})


console.log("Hola Platzi")