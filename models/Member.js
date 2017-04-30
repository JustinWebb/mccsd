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
	firstName: { type: String, required: true, initial: false },
	lastName: { type: String, required: true, initial: false },
	title: { type: String, required: true, initial: false },
	portrait: { type: String },
	story: { type: Types.Textarea, min: 100, max: 600, required: true, initial: false },
});

Member.schema.virtual('fullname').get(function () {
	return this.firstName + ' ' + this.lastName;
});

Member.register();
