
/*
 * GET home page.
 */

exports.index = function(req, res){
  var filters = req.url.split("/");
  res.render('index', { title: 'Shopjs'
  , url: req.url
  , req: req
  , res: res
  , content: filters
  , footertext: 'Copyright 2012 Shopjs'
   });
};