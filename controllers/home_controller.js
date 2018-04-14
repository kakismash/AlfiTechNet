// Home controller
module.exports = {
   //controller fucntions
   index : function(req, res, next){
     res.render('index', {title : 'Welcome to AlfiTechNet'});
   }
}
