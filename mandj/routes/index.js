
/*
 * GET home page.
 */

var brand = "MattAndJessica.us";

exports.index = function(req, res){
  res.render('index', { title: 'Express'});
};

exports.about = function(req, res){
    res.render('about', {title: 'About Us'});
};
