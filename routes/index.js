
/*
 * GET home page.
 */
module.exports = {
	// app.get('/'...)
  	index: function(req, res) {
    	res.render('index', { title: 'church' });
  	},
	about: function(req, res) {
	    res.render('about', { title: 'about' });
	},
	contact: function(req, res) {
	    res.render('contact', { title: 'contact' });
	},
  	worship: function(req, res) {
    	res.render('worship', { title: 'worship' });
  	},
	announcement: function(req, res) {
	    res.render('announcement', { title: 'announcement' });
	},
	events: function(req, res) {
	    res.render('event', { title: 'event' });
	}
}
