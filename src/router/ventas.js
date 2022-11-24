const express = require('express');
const router = express.Router();

router.get('/ventas', (req, res) => {
    res.send('Crear ventas')
})

module.exports = router;