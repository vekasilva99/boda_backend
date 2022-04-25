const router = require('express').Router();

// add a new invitado
router.post('/invitados', (req, res) => {
  res.send("Crear Invitado")
  });


module.exports = router;