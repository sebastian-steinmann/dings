define(
	[ 'jquery', 'Ractive', 'backbone', 'backboneAdaptor', 'models/movie', 'collections/movieCollection', 
	'mock/movieData', 'views/moviesView', 'views/showsView', 'router' ], 
	function ( $, Ractive, Backbone, Adaptor, MovieModel, Movies, mockMovies, MoviesView, ShowsView, router  ) {
		var movieCollection = [];
		for (var i = 0, len = 1000; i < len; i++) {
			movieCollection.push(new MovieModel(
				{
					id: i,
					title: 'Film - ' + i,
					description: 'Most amazing movie ' + i,
					following: true,
					poster: '',
					banner: ''
				}
			));
		}

		var movies = new Movies(movieCollection);
		var movieList = new MoviesView({
			el: 'main',
			movies: movies,
			adaptors: ['Backbone']
		});

		var showList = new ShowsView({
			el: 'main',
			movies: movies,
			adaptors: ['Backbone']
		});

		router.on('route:home', function() {
			movieList.set('visible', true);
			showList.set('visible', false);
		});
		router.on('route:shows', function() {
			movieList.set('visible', false);
			showList.set('visible', true);
		});

		Backbone.history.start();
	}
	);
