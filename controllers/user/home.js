module.exports = {
	index: function(req, res){
        res.render('user/home',{title: 'Home Page', heading: 'Home Page', nav: true});
    }
}
