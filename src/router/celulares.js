const express = require('express');
const router = express.Router();

router.get('/celulares', (req, res) => {
    res.send('Crear celulares')
})

module.exports = router;