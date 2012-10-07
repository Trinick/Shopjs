
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Shopjs'
  , url: req.url
  , req: req
  , res: res
  , pagecontent: "WIP"
  , footertext: 'Copyright 2012 Shopjs'
   });
};

exports.filter = function(req, res){
  var filters = req.url.split("/");
  res.render('index', { title: 'Shopjs'
  , url: req.url
  , req: req
  , res: res
  , pagecontent: filters
  , footertext: 'Copyright 2012 Shopjs'
   });
};