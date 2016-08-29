namespace MyApp.Controllers {

  export class MainController {
    public userName;
    public password;

    submit = function() {
      console.log('Second form submit with : ', this.user);
      alert('User Name : ' + this.user.userName);
      alert('Password : ' + this.user.password);

    }
  }
  angular.module('MyApp').controller('MainController', MainController);
}
