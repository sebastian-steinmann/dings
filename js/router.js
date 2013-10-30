define(
    ['Ractive', 'rv!templates/shows'], 
    function(Ractive, showsTemplate) {
        var Router = Backbone.Router.extend({
			routes: {
				'' : 'home',
				'shows' : 'shows'
			}
		});
		return new Router();
    }
);