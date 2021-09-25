import app from "./app";

app.listen(app.get('port'), 'localhost');
console.log('Servidor OK, ejecutando bajo el puerto:  '   +  app.get('port'));

