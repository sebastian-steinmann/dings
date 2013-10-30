define(
	['backbone', 'models/movie'], 
	function(Backbone, MovieModel) {
		return Backbone.Collection.extend({
			model: MovieModel
		});
	}
);