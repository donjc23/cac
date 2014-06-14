/** routes.js
  */
var start = require('./routes/index')

module.exports = function(app) {

 	app.get('/', start.index);
    app.get('/about', start.about);
    app.get('/contact', start.contact);
    app.get('/worship', start.worship);
    app.get('/announcement', start.announcement);
    app.get('/event', start.events);



}