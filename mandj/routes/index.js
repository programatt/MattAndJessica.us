
/*
 * GET home page.
 */

var brand = "MattAndJessica.us";

exports.index = function(req, res){
  res.render('index', { title: 'Express', id: 'express', brand: brand, body : ''});
};
