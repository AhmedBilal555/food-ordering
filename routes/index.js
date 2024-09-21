var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/submit", function (req, res, next) {
  console.log(req.body)
  var data = ` cuisine : ${req.body.foodCuisine}, food-item: ${req.body.foodItem}, qunatity: ${req.body.Quantity}\n`;
  fs.appendFile('data.txt', data, function (err) {
    if (err) {
      console.log(err)
    }
    else {
      console.log('Its Working')
    }

  })
    
    res.render('response');
  });



module.exports = router;
// same as messagebox project extract data form req.body and save it in a file using fs. module

//share the copy of response to the user also like we have did in message 

// and put address 
