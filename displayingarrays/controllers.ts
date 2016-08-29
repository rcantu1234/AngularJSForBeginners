namespace MyApp.Controllers {

  export class HomeController {
    public hello;
    public goodbye;
    public changeMessage;
    public notes;
    public getNoteClass;

    constructor() {
      let self = this;
      this.hello = 'Hello';
      this.goodbye = 'Goodbye';

      // self.notes = [
      //   {id: 1, label: 'First Note', done: false, assignee: 'Shyam'},
      //   {id: 2, label: 'Second Note', done: false},
      //   {id: 3, label: 'Third Note', done: true},
      //   {id: 4, label: 'Fourth Note', done: false, assignee: 'Brad'}
      // ];

      self.notes = {
        shyam: {id: 1, label: 'First Note', done: false},
        Misko: {id: 3, label: 'Finished the Third Note', done: true},
        brad: {id: 2, label: 'Second Note', done: false},
      };

      self.changeMessage = function() {
        self.hello = 'Goodbye';
      }

      self.getNoteClass = function(status) {
        return {done: status, pending: !status}
      }

    }


  }
  angular.module('MyApp').controller('HomeController', HomeController);

  export class AboutController {
    public message = 'something';
  }
  angular.module('MyApp').controller('AboutController', AboutController);
}
