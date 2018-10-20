const express = require('express');
const router = express.Router();


/**
 * Change light effects
 */
router.post('/changeLights', (req, res, next) => {
  // get nanoleaf api singleton
  const nanoleafApi = req.app.locals.nanoleafAPI;

  // get and set effect
  const effect = req.body.effect;
  console.log(`attempting to set light effect to ${ effect } on server`);

  nanoleafApi.setEffect(effect)
    .then(() => {
      console.log(`Lights set to ${ effect }.`);
      return res.status(200);
    })
    .catch((err) => {
      console.log(`Error in setting light effect: ${ err }`);
      return res.status(500);
    });
});

module.exports = router;