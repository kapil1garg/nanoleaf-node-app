const express = require('express');
const router = express.Router();

const lightEffectValues = [
  'Aurora Magic',
  'Beach Waves',
  'Color Burst',
  'Disco',
  'Dracarys',
  'Fireworks And Firecrackers',
  'Flames',
  'Inner Peace',
  'Koi Pond',
  'Moonlight',
  'Nemo',
  'Netflix And Chill',
  'Northern Lights',
  'Ocean',
  'Pride Rainbow',
  'Purple Rain',
  'Rain',
  'Snowfall',
  'Sunset',
  'Triluminox Energy Crystal',
  'TV Simulation',
  'Vibrant Sunrise',
  'Windmill',
  'Flash Twice',
  'Random'
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { lightEffects: lightEffectValues});
});

module.exports = router;