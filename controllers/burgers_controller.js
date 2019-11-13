const express = require('express');

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require('../models/burger.js');
console.log(burger.selectAll);
// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject.burgers[0].ID);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function (req, res) {
  burger.insertOne(
    ['burger_name', 'devoured'],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function (req, res) {
  const condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );

});

// Export routes for server.js to use.
module.exports = router;