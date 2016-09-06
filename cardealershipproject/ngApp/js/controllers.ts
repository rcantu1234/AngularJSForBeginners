namespace MyApp.Controllers {

    const apiURL = '/api/cars/search/';

    export class HomeController {

    }
    angular.module('MyApp').controller('HomeController', HomeController);

    export class DetailsController {

		public car;

        public ok() {
            this.$uibModalInstance.close();
        }

        constructor(public id: number, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private $http: ng.IHttpService) {
			let url = "/api/cars/"+ this.id;
      this.$http.get(url)
                .then((response) => {
                    this.car = response.data;
                })
                .catch((response) => {
                    console.error('Could not retrieve cars.');
                });
		}
  }

  angular.module('MyApp').controller('DetailsController', DetailsController);

      export class DialogController {

      public ok() {
         this.$uibModalInstance.close();
      }

      constructor(public carName: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
  }
  angular.module('MyApp').controller('DialogController', DialogController);

    const makesURL = '/api/makes/';
    export class MakesController {
        public makes;

        constructor(private $http: ng.IHttpService) {
          this.$http.get('api/makes')
            .then((response) => {
              this.makes = response.data;
            }).catch((response) => {
              console.error('Could not retrieve makes.');
            })
        }
    }
    angular.module('MyApp').controller('MakesController', MakesController);

    export class SearchController {
      public cars;
      public paramId;
      public search;

      fetch() {
          if (this.search) {
              console.log('searching');
              this.$http.get(apiURL + this.search)
                  .then((results) => {
                      this.cars = results.data;
                  });
          } else {
            this.cars = " ";
          }
      }

      public showModal(id: number) {
                this.$uibModal.open({
                    templateUrl: '/templates/details.html',
                    controller: 'DetailsController',
                    controllerAs: 'modal',
                    resolve: {
                        id: () => id
                    },
                    size: 'lg'
                });
      }
      constructor(private $http: ng.IHttpService, $stateParams: ng.ui.IStateParamsService, private $uibModal: angular.ui.bootstrap.IModalService) { }
    }
    angular.module('MyApp').controller('SearchController', SearchController);

    export class ShowController {
      public cars;
      public paramId;

      constructor(private $http: ng.IHttpService, $stateParams: ng.ui.IStateParamsService, private $uibModal: angular.ui.bootstrap.IModalService) {
        // BEGINNING OF CARS HTTP.GET
        this.$http.get('api/cars')
          .then((response) => {
            let temp = response.data;
            this.paramId = $stateParams['id'];
            this.cars = temp.filter((car) => {
              return car.CarMakeId == $stateParams['id'];
            });
          }).catch((response) => {
            console.error('Could not retrieve cars.');
          })
      }

      public showModal(id: number) {
                this.$uibModal.open({
                    templateUrl: '/templates/details.html',
                    controller: 'DetailsController',
                    controllerAs: 'modal',
                    resolve: {
                        id: () => id
                    },
                    size: 'lg'
                });
      }
    }
}
