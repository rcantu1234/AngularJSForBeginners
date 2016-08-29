namespace app.Controllers {
  export class HomeController {

    // constructor() {
    //
    // }

    public showModal(animalName: string) {
       this.$uibModal.open({
           templateUrl: '/templates/dialog.html',
           controller: 'DialogController',
           controllerAs: 'modal',
           resolve: {
               animalName: () => animalName
           },
           size: 'sm'
       });
   }
   constructor(private $uibModal: angular.ui.bootstrap.IModalService) { }
  }

  angular.module('app').controller('HomeController', HomeController);

  export class DialogController {

    public ok() {
        this.$uibModalInstance.close();
    }

    constructor(public animalName: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
  }
angular.module('app').controller('DialogController', DialogController);
}
