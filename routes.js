import express from 'express';
import contactMe from './contactme/contact-network.js';   // Verifica la ruta

const router = express.Router();

router.use('/contactMe', contactMe);

export default router;
