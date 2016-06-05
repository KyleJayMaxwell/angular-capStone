var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'));
var Year = require('../models/years.js');
var State = require('../models/states.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/years', function(req, res, next) {
  var newYear = new Year(req.body);
  newYear.save(function(err, data) {
    if (err) { res.json('Error saving year');}
    else
    {
      res.json(data);
    }
  })
});

router.put('/year/:yearNum/state', function(req, res, next) {
  var newState = new State(req.body);
  newState.save(function(err, data) {
    if(err) { res.json('Error saving state')}
    else {
      Year.findOne({ year : req.params.yearNum}, function(err, year) {
        if(err)
        { res.json('could not find year') }

        else {
          var update = { $push : {state : newState}};
          var options = {new:true};
          var id = year.id
          Year.findByIdAndUpdate(id, update, function(err, updatedYear) {
            if (err){res.json('error adding state to year')}

            else { res.json(updatedYear) }
          })
        }
      })
    }
  })
});

//Get all states for year

router.get('/year/state', function(req, res, next) {
    Year.find()
        .populate('state')
        .exec(function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.json(data);
            }
        });
});

router.get('/year/:yearNum/state', function(req, res, next) {
    Year
        .find({yearNum : req.body.yearNum})
        .populate('state')
        .exec(function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.json(data);
            }
        });
});
//Get Total Energy for Single State for Year
router.get('/year/:yearNum/state/:state', function(req, res, next) {
    console.log('here');
    Year
        .find({yearNum : req.params.yearNum})
        .populate({
            path: 'state',
            match: {name: req.params.state}
        })

        .exec(function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.json(
                    //drills down to energy sources
                    data[0]['state'][0]['producer'][0]["Total Electric Power Industry"]);
            }
        });
});
//get data for two states for single year
router.get('/year/:yearNum/state/:state/:state2', function(req, res, next) {
    Year
        .find({yearNum : req.params.yearNum})
        .populate({
            path: 'state',
            match: {name: { $in :[ req.params.state, req.params.state2] }}
        })

        .exec(function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.json(data);

            }
        });
});

//get data for one state for two years
router.get('/year/:yearNum/:yearNum2/state/:state', function(req, res, next) {
    Year
        .find({yearNum : { $in : [req.params.yearNum, req.params.yearNum2]}})
        .populate({
            path: 'state',
            match: {abbreviation:  req.params.state}
        })

        .exec(function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.json(data);

            }
        });
});
//note to get US entire the Abbreviation is US-Total, might want to switch to Abbreviations.
//should fix US to a name when rerunning seed
module.exports = router;