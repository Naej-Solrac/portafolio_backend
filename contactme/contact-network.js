import express from 'express';
const router = express.Router();

router.get('/contactMe', (req, res) => {
    res.send('contactMe!');
});

export default router;
