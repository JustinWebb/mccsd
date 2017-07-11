var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * File Upload Model
 * ===========
 * A database model for uploading images to the local file system
 */
var FileUpload = new keystone.List('FileUpload', {
	defaultColumns: 'name, createdTimeStamp, assetType',
});

var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
		publicPath: '/public/uploads/files', // path where files will be served
		size: true,
		mimetype: true,
		originalname: true,
		url: true,
	},
	// schema: {
	// 	size: true,
	// 	mimetype: true,
	// 	path: false,
	// 	originalname: true,
	// 	url: true,
	// },
});

FileUpload.add({
	name: { type: Types.Key, index: true },
	file: {
		type: Types.File,
		storage: myStorage,
	},
	createdTimeStamp: { type: Date, default: Date.now },
	size: Number,           // on by default; the size of the file
	mimetype: String,       // on by default; the mime type of the file
	path: String,           // the path (e.g directory) the file is stored in; not the full path to the file
	originalname: String,   // the original (uploaded) name of the file; useful when filename is generated
	url: String,            // publicly accessible URL of the stored file
	assetType: { type: Types.Select, required: true, initial: true, options: [
		{ value: 'agenda', label: 'Agenda' },
		{ value: 'minutes', label: 'Meeting Minutes' },
		{ value: 'portraits', label: 'Member Portrait' },
	] },      // determins the file's upload subfolder

});

FileUpload.defaultColumns = 'name';
FileUpload.register();
