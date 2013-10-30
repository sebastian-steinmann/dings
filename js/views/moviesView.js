define(
    ['Ractive', 'rv!templates/movies'], 
    function(Ractive, movieTemplate) {
        return Ractive.extend({
            template: movieTemplate,

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