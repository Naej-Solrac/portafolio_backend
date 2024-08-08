import express from 'express';
const app = express();
const PORT = process.env.PORT || 3050;
import bodyParser from 'body-parser';

import mainRoutes from'./routes.js';  // Asegúrate que esta ruta apunte al archivo correcto

// Middleware para parsear JSON y datos URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRoutes);

app.get('/', (req, res) => {
    res.send('Hello World in backend!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
