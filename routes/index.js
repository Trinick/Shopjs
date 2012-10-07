
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Shopjs'
  , url: req.url
  , req: req
  , res: res
   });
};