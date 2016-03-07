var fs = require('fs')
var http = require('http')

fs.readFile('../public/index.html', function (err, data){
  if(err){
    return console.log("no se pudo abrir el archivo"+err.message)
  }
  console.log(data.toString().length)
})


console.log("Hola Platzi")

var server = http.createServer(function (request,response){

})

server.listen(3000, function(){
  console.log('Servidor iniciado. Escuchando el puerto 3000')
})