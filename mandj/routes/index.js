
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

exports.proposal = function(req, res){
    res.render('proposal', {title: 'The Proposal'});
};

exports.ceremony = function(req, res){
    res.render('ceremony', {title: 'The Ceremony'}); }

exports.reception = function(req, res){
    res.render('reception', {title: 'The Reception'}); 
}

exports.weddingparty = function(req,res){
    res.render('weddingparty', {title: 'The Wedding Party'});
}
