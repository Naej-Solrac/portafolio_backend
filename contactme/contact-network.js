import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

router.get('/contactMe', (req, res) => {
    res.send('contactMe!');
});


router.get('/download-cv', (req, res) => {
    const { lang } = req.query;
    let filename = '';

    if (lang === "Es") {
        filename = 'Gonzales_Malca_Jean_Carlos(ES).pdf';
    } else if (lang === "En") {
        filename = 'Gonzales_Malca_Jean_Carlos(ENG).pdf';
    } else {
        return res.status(400).send("Idioma no especificado o incorrecto.");
    }

    const filePath = path.resolve(__dirname, '..', 'cv-pdf', filename);
    console.log("Ruta del archivo:", filePath);

    res.download(filePath, filename, (err) => {
        if (err) {
            console.error("Error al descargar el archivo:", err);
            return res.status(500).send("No se pudo descargar el archivo. " + err.message);
        }
    });
});

export default router;
