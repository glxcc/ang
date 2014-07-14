var express = require('express');
var router = express.Router();
var fs = require('fs');

function readJSONFile(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if(err) {
            callback(err);
            return;
        }
        try {

            var dataString = data.toString();
            console.log(dataString);

           // callback(null, JSON.parse(dataString));
            callback(null, dataString);
        } catch(exception) {
            callback(exception);
        }
    });
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ang' });
});

router.get('/todo', function(req, res, next){

    res.render('todo', {title : 'Todo'})
})

router.get('/ajax/:file', function(req, res , next){
    //  var path = require('path'),
    // appDir = path.dirname(require.main.filename);
   var filePath = __dirname + '\\files\\'+  req.params.file
    readJSONFile(filePath, function (err, json) {
        if(err) { throw err; }
        console.log(json);
        res.send(json)
    });

  //  res.send();

})

router.get('/ajax', function(req, res , next){
    res.send("called");
})


module.exports = router;
