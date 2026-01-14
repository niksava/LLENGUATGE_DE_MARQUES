const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/procesar', (req, res) => {
  const nom = req.body.usuari;
  res.send(`Formulari rebut. Benvingut, ${nom}`);
});

app.get('/ajuda', (req, res) => {
  res.send('Pàgina d’Ajuda');
});

app.get('/contacte', (req, res) => {
  res.send('Pàgina de contacte');
});

app.post('/dades', (req, res) => {
  res.send(`Dades rebudes: ${req.body.valor}`);
});

app.post('/crear', (req, res) => {
  res.send('Usuari creat');
});


app.post('/reserva', (req, res) => {
  const tractament = req.body.tractament;
  const nom = req.body.nom;
  const cognoms = req.body.cognoms;
  const telefon = req.body.telefon;
  const email = req.body.email;
  const emailConfirm = req.body['email-confirm'];
  const pass = req.body.contrasenya;
  const passConfirm = req.body['contrasenya-confirm'];
  const tipus = req.body['tipus-habitacio'];
  const persones = req.body.persones;
  const entrada = req.body['data-entrada'];
  const sortida = req.body['data-sortida'];
  const peticions = req.body.peticions;
  const parking = req.body.parking ? "Sí" : "No";
  const esmorzar = req.body.esmorzar ? "Sí" : "No";
  const hora = req.body['hora-arribada'];

  if (pass !== passConfirm) {
    return res.send(`<h1>Error!</h1><p>Les contrasenyes no coincideixen.</p><a href="/reserva.html">Tornar</a>`);
  }

  if (email !== emailConfirm) {
    return res.send(`<h1>Error!</h1><p>Els correus electrònics no coincideixen.</p><a href="/reserva.html">Tornar</a>`);
  }

  res.send(`
    <h1>Resum Reserva Hotel Terror</h1>
    <p><strong>Client:</strong> ${tractament} ${nom} ${cognoms}</p>
    <p><strong>Telèfon:</strong> ${telefon}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Habitació:</strong> ${tipus} (${persones} persones)</p>
    <p><strong>Entrada:</strong> ${entrada}</p>
    <p><strong>Sortida:</strong> ${sortida}</p>
    <p><strong>Parking:</strong> ${parking}</p>
    <p><strong>Esmorzar:</strong> ${esmorzar}</p>
    <p><strong>Hora arribada:</strong> ${hora}</p>
    <p><strong>Peticions:</strong> ${peticions || 'Cap'}</p>
  `);
});


app.listen(3000, () => {
  console.log('Servidor escoltant a http://localhost:3000');
});
