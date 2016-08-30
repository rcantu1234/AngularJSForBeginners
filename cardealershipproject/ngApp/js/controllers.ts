namespace MyApp.Controllers {

    const apiURL = '/api/cars/search/';

    export class HomeController {
        public search;
        public cars;

        fetch() {
            if (this.search) {
                console.log('searching');
                this.$http.get(apiURL + this.search)
                    .then((results) => {
                        this.cars = results.data;
                    });
            }
        }
        constructor(private $http: ng.IHttpService) { }
    }
    angular.module('MyApp').controller('HomeController', HomeController);

   export class DetailsController {
       public carString;
       public cars;

       public showModal(carName: string) {
              this.$uibModal.open({
              templateUrl: '/templates/dialog.html',
              controller: 'DialogController',
              controllerAs: 'modal',
              resolve: {
                  carName: () => carName
              },
              size: 'sm',
          });
       }
       constructor(private $uibModal: angular.ui.bootstrap.IModalService) {
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
        public cars;
        public selectedMakeId;
        public selectedMake;
        public selectedCarId = 0;
        public carString: string = '';
        public getCars;
        public getMakes;
        public makeString = '';

        constructor(private $http: ng.IHttpService) {
          this.$http.get('api/makes')
            .then((response) => {
              this.makes = response.data;
              this.selectedMake = this.makes[0];

                this.getMakes = function(make) {
                  if(this.makes[0]['id'] === this.selectedMakeId) {
                    this.makeString = 'No car to display!!!'
                  } else if (this.makes[2]['id'] === this.selectedMakeId) {
                    this.makeString = this.cars[0]['ShortDescription'] + " | " + this.cars[1]['ShortDescription'] + " | " + this.cars[2]['ShortDescription'];
                  } else if (this.makes[1]['id'] === this.selectedMakeId) {
                    this.makeString = this.cars[3]['ShortDescription'] + " | " + this.cars[4]['ShortDescription'];
                  }
                  return this.makeString;
                }

            }).catch((response) => {
              console.error('Could not retrieve makes.');
            })

            // BEGINNING OF CARS HTTP.GET
            this.$http.get('api/cars')
              .then((response) => {
                this.cars = response.data;

                this.getCars = function(car) {
                  if (this.cars[0]['id'] === this.selectedCarId) {
                    this.carString = this.cars[0]['FullDescription'] + " " + this.cars[0]['Price'];
                  } else if (this.cars[1]['id'] === this.selectedCarId) {
                    this.carString = this.cars[1]['FullDescription'] + " " + this.cars[1]['Price'];
                  } else if (this.cars[2]['id'] === this.selectedCarId) {
                    this.carString  = this.cars[2]['FullDescription'] + " " + this.cars[2]['Price'];
                  } else if (this.cars[3]['id'] === this.selectedCarId) {
                    this.carString  = this.cars[3]['FullDescription'] + " " + this.cars[3]['Price'];
                  } else if (this.cars[4]['id'] === this.selectedCarId) {
                    this.carString  = this.cars[4]['FullDescription'] + " " + this.cars[4]['Price'];
                  }
                  return this.carString;
                }
              }).catch((response) => {
                console.error('Could not retrieve cars.');
              })
          this.selectedMakeId = 1;
          this.selectedCarId = 2;
        }
    }
    angular.module('MyApp').controller('MakesController', MakesController);
}
