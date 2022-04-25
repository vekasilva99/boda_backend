const router = require("express").Router();
let Invitacion = require("../models/invitacion");
// add a new invitado
router.post("/nueva", (req, res) => {
  const { email, titulo, invites } = req.body;
  Invitacion.findOne({ email: req.body.email }, async (err, item) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Server error: " + err,
      });
    } else {
      if (Boolean(item)) {
        return res.status(400).json({
          success: false,
          message: "Ya existe una invitación creada con este email.",
        });
      } else {
        const newInvitacion = new Invitacion({
          email,
          titulo,
          invites,
          rsvp: 0,
        });
        newInvitacion
          .save()
          .then((data) => {
            console.log(data);
            return res.status(200).json({
              success: true,
              message: `Invitacion creada.`,
              invitacion: data,
            });
          })
          .catch((err) => {
            return res.status(500).json({
              success: false,
              message: "Server error: " + err,
            });
          });
      }
    }
  });
});

router.get("/", (req, res) => {
  Invitacion.find()
    .then((users) => {
      return res.status(200).json({
        success: true,
        data: users,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Server error: " + err,
      });
    });
});

router.get("/:id", (req, res) => {

  Invitacion.findById(req.params.id)
    .then((item) => {
        if(Boolean(item)){
      return res.status(200).json({
        success: true,
        data: item,
      });
    }else{
        return res.status(404).json({
            success: false,
            message: 'This user is not registered yet'
          })
    }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Server error: " + err,
      });
    });
});

module.exports = router;
