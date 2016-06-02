var mongoose = require('mongoose-q')(require('mongoose'));
mongoose.connect('mongodb://localhost/kyle_test');

var Year = require('../models/years.js');


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
  { yearNum: '2014' },
  ];

console.log('Running Years Seed!')

Year
.insertMany(yearArray, function (err, years) {
  if (err) {
    console.log ('Year Doc not created');
  } else {
    console.log('success!')
  }
});

// var emptyArray = [
// ];

// var obj = {};
// function createYear () {
//   for (var i=0; i<=25; i++) {
//     emptyArray.push({'year': 1990 + i});
//   }
// }


