var express = require('express');
var router = express.Router();

var Table = require('../models/Table.js');




/* GET /table listing. */
router.get('/', function(req, res, next) {
  //res.render('table', { title: 'Table Example'});
  Table.find(function (err, table) {
    if (err) return next(err);
    res.json(table);
  });
});

/* POST /table */
router.post('/', function(req, res, next) {
  Table.create(req.body, function (err, post) {
    if (err) return next(err);
    console.log(post)
    res.json(post);
  });
});

/* GET /table/id */
router.get('/:id', function(req, res, next) {
  Table.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /table/:id */
router.put('/:id', function(req, res, next) {
  Table.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /table/:id */
router.delete('/:id', function(req, res, next) {
  Table.findByIdAndRemove(req.params.id, req.body, function (err, post) {debugger
    if (err) return next(err);
    res.json(post);
  });
});




module.exports = router;
