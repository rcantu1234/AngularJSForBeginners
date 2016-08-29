namespace app.Controllers {

  class HomeController {
    public center = {latitude: 47.671853, longitude: -122.121328};
    public zoom = 15;
}

angular.module('MyApp').controller('HomeController', HomeController);
  // export class HomeController {
  //
  //   constructor() {
  //
  //   }
  // }
  //
  // angular.module('app').controller('HomeController', HomeController);
 //
 //  class AnswerController {
 //     public answer;
 //     public loaded;
 //
 //     public getAnswer() {
 //         this.loaded = false;
 //         this.$http.get('/api/deepThought').then((response) => {
 //             this.answer = response.data;
 //         }).catch((response) => {
 //             console.error('Could not ask Deep Thought.');
 //         }).finally(() => {
 //             this.loaded = true;
 //         });
 //     }
 //
 //     constructor(private $http: ng.IHttpService) {}
 // }
 //
 // angular.module('app').controller('AnswerController', AnswerController);
}
