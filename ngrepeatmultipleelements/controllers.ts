namespace MyApp.Controllers {
  angular.module('MyApp', []);

  export class HomeController {
    public notes;
    public userName;
    public password;
    public change;
    public submit;

    constructor() {
      this.notes = [
        {id: 1, label: 'First Note', done: false},
        {id: 2, label: 'Second Note', done: false},
        {id: 3, label: 'Finished the Third Note', done: true}
      ];
      this.change = function() {
        this.userName = 'changed';
        this.password = 'password';
      }

      this.submit = function() {
        console.log('User clicked submit with ', this.userName, this.password);
      }

    }
  }
  angular.module('MyApp').controller('HomeController', HomeController)
}
