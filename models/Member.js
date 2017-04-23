var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Member Model
 * =============
 */

var Member = new keystone.List('Member', {
	defaultColumns: 'firstName, lastName, memberType, title',
});

Member.add({
	memberType: { type: Types.Select, required: true, initial: true, options: [
		{ value: 'staff', label: 'Staff Member' },
		{ value: 'board', label: 'Board Member' },
	] },
	firstName: { type: String },
	lastName: { type: String },
	title: { type: String },
	portrait: { type: String },
	story: { type: Types.Textarea, min: 100, max: 600 },
});

Member.schema.virtual('fullname').get(function () {
	return this.firstName + ' ' + this.lastName;
});

Member.schema.virtual('portraitSrc').get(function () {
	var img = this.firstName + '-' + this.lastName + '.jpg';
	var path = ['images', this.memberType.value, img].join('/');
	return ;
});

Member.register();
