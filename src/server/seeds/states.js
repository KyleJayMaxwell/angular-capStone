var mongoose = require('mongoose-q')(require('mongoose'));
mongoose.connect(process.env.MONGODB_URI);
var State = require('../models/states.js');
var Year = require('../models/years.js');
var statesArray = require('../state_array.js');
var energyData = require('../energyData.js')
const yearArray =
[ { yearNum: '1990' },
  { yearNum: '1991' },
  { yearNum: '1992' },
  { yearNum: '1993' },
  { yearNum: '1994' },
  { yearNum: '1995' },
  { yearNum: '1996' },
  { yearNum: '1997' },
  { yearNum: '1998' },
  { yearNum: '1999' },
  { yearNum: '2000' },
  { yearNum: '2001' },
  { yearNum: '2002' },
  { yearNum: '2003' },
  { yearNum: '2004' },
  { yearNum: '2005' },
  { yearNum: '2006' },
  { yearNum: '2007' },
  { yearNum: '2008' },
  { yearNum: '2009' },
  { yearNum: '2010' },
  { yearNum: '2011' },
  { yearNum: '2012' },
  { yearNum: '2013' },
  { yearNum: '2014' }];


//We will have the
//1)prev created hashed json (energy_data)
//2)array of year objects (yearArray)
//3 array of state objects [name: '', abbreviation: ''] (stateArray);

//
function seedStates (data){
  yearArray
  .forEach((el) => {
    var nowYear = el['yearNum']
    var allStatesForYearData = data[nowYear];
    statesArray
    .forEach((elem) => {
      var newState = new State();
      newState.name = elem.name;
      newState.abbreviation = elem.abbreviation;
      newState.producer = allStatesForYearData[elem.abbreviation];
        //may need to wrap this in promise
      newState
      .save((err,data) => {
        if (err) {console.log('Error saving state')
      } else {
          Year
          .findOne({ yearNum: nowYear}, (err, data) => {
            if (err) {console.log('Could not find year: ' + nowYear)
          } else {
              var update = { $push: {state : newState}};
              var options = {new: true};
              var id = data._id;
              Year
              .findByIdAndUpdate(id, update, (err, updatedYear) =>{
                if (err){ console.log('error adding state to year')
              } else { console.log(updatedYear) }
            })
          }
          })
        }
      })
    })
  })
}

seedStates(energyData);




//Refactored

