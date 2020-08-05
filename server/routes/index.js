var express = require('express');
var router = express.Router();

router.get('/hereos', function(req, res, next) {
  const hereos=[
    {
      id:0,
      name: 'The tick',
      saying: 'spooonnn!'
    }
  ];
  res.json(hereos);
});

module.exports = router;
