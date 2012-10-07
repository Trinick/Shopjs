
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Shopjss'
  , url: req.url
  , req: req
  , res: res
  , footertext: 'Copyright 2012 Shopjs'
  , content: 'WIP YO'
   });
};