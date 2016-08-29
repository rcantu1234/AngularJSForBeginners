namespace app.Controllers {

    const apiURL = '/api/movies/search/';

    export class HomeController {
        public search;
        public movies;

        fetch() {
            if (this.search) {
                console.log('searching');
                this.$http.get(apiURL + this.search)
                    .then((results) => {
                        this.movies = results.data;
                    });
            }
        }

        constructor(private $http: ng.IHttpService) { }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
