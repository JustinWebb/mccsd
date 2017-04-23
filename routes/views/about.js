var keystone = require('keystone');
var Member = keystone.list('Member');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// set currently selected item in header navigation
	locals.section = 'about';
	locals.foo = 'bar';

	view.query('board', Member.model.find({ memberType: 'board' }));
	view.query('staff', Member.model.find({ memberType: 'staff' }));

	view.render('about');
};
