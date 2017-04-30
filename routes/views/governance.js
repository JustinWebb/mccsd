var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

    // locals.section is used to set the active item in
    // the site navigation
	locals.section = 'governance';

    // Render the view
	view.render('governance');
};
