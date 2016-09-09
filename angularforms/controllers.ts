namespace MyApp.Controllers {
  export class HomeController {
    public userName;
    public password;
    public submit;
    // public submit2

    constructor() {
      // this.submit1 = function() {
      //   let user = {userName: this.userName, password: this.password};
      //   console.log('First form submit with : ' + user);
      // }

      // this.submit = function() {
      //   console.log('Second form submit with : ', this.userName, this.password);
      // }

      this.submit = function() {
        console.log('User clicked submit with : ', this.userName, this.password);
      }
    }

  }
  angular.module('MyApp').controller('HomeController', HomeController);
}
