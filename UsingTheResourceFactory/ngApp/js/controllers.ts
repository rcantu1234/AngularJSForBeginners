namespace MoviesApp.Controllers {

    export class MoviesListController {
        public movies;

        constructor(movieService: MoviesApp.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }


    export class MoviesAddController {
        public movieToCreate;

        addMovie() {
            this.movieService.save(this.movieToCreate).then(
                () => this.$state.go('Home')
            );
        }

        constructor(private movieService: MoviesApp.Services.MovieService, private $state: ng.ui.IStateService) { }
    }


    export class MoviesEditController {
        public movieToEdit;

        editMovie() {
            this.movieService.save(this.movieToEdit).then(
                () => this.$state.go('Home')
            );
        }

        constructor(private movieService: MoviesApp.Services.MovieService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
            this.movieToEdit = movieService.getMovie($stateParams['id'])
        }
    }


    export class MoviesDeleteController {
        public movieToDelete;

        deleteMovie() {
            this.movieService.deleteMovie(this.movieToDelete.id).then(
                () => this.$state.go('Home')
            );
        }

        constructor(private movieService: MoviesApp.Services.MovieService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
            this.movieToDelete = movieService.getMovie($stateParams['id'])
        }
    }

}
