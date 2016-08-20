namespace app.Controllers {
  export class HomeController {

    public movies;

    constructor(private $http: ng.IHttpService) {
      this.$http.get('/api/movies')
      .then((response) => {
        this.movies = response.data;
      })
      .catch((response) => {
        console.error('Could not retrieve the movies.');
      });
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
