const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para procesar datos del formulario
app.use(express.urlencoded({ extended: true }));

// Mostrar el formulario
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Procesar el formulario
app.post('/welcome', (req, res) => {
  const name = req.body.name;
  res.send(`
    <html>
      <head><title>Bienvenido</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>¡Bienvenido, ${name}!</h1>
        <a href="/">Volver</a>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
