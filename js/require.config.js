require.config({
	baseUrl: ".",

	out: "build.js",
	name: 'app',
	insertRequire: ['app'],
	include: ['holder'],
	optimize: 'none',
	generateSourceMaps: true,
	preserveLicenseComments: false,
	
	paths: {
		jquery: 'lib/jquery',
		Ractive: 'lib/Ractive',
		text: 'lib/text',
		rv: 'lib/rv',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		backboneAdaptor: 'lib/backbone.adaptor',
		holder: 'lib/holder'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});