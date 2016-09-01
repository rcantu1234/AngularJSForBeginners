namespace app.Controllers {
  export class HomeController {

    constructor() {

    }
  }

  angular.module('app').controller('HomeController', HomeController);

  export class ShowController {
    public cars;
    public paramId;

    constructor(private $http: ng.IHttpService, $stateParams: ng.ui.IStateParamsService) {
        this.$http.get('/api/cars')
            .then((response) => {
                let temp = response.data;
                this.paramId = $stateParams['id'];
                this.cars = temp.filter((car)=>{
                  return car.CarMakeId == $stateParams['id'];
                });
            })
            .catch((response) => {
                console.error('Could not retrieve makes.');
            });
    }
  }

  angular.module('app').controller('ShowController', ShowController);

  export class MainController {
    public makes;

    constructor(private $http: ng.IHttpService) {
            this.$http.get('/api/makes')
                .then((response) => {
                    this.makes = response.data;
                })
                .catch((response) => {
                    console.error('Could not retrieve makes.');
                });
        }
  }

  angular.module('app').controller('MainController', MainController);
}
