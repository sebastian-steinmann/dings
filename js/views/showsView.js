define(
    ['Ractive', 'rv!templates/shows'], 
    function(Ractive, showsTemplate) {
        return Ractive.extend({
			template: showsTemplate,

			init: function(options) {
				this.movies = options.movies;
				this.set('movies', this.movies);
				this.set('active', false);

				this.on({
					toggle: function(event, id) {
						event.original.preventDefault();
						var movie = this.movies.get(id);

						var status = movie.get('following');
						movie.set('following', !status);
					}
				});
			}
		});
    }
);