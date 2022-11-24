const express = require('express');
const router = express.Router();

router.get('/clientes', (req, res) => {
    res.send('Crear clientes')
})

module.exports = router;