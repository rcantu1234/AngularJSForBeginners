namespace MyApp.Controllers {

  export class HomeController {

    let notes1;
    let notes2;
    // public notes;
    self = this;

    notes = [
      {id: 1, label: 'First Note', done: false, someRandom: 31431},
      {id: 2, label: 'Second Note', done: false},
      {id: 3, label: 'Finished Third Note', done: true}
    ];

    notes1 = angular.copy(this.notes);
    notes2 = angular.copy(this.notes);

    changeNotes = function() {
      this.notes = [
        {id: 1, label: 'Changed Note', done: false, someRandom: 4242},
        {id: 2, label: 'Second Note', done: false},
        {id: 3, label: 'Finished Third Note', done: true}
      ];
      notes1 = angular.copy(this.notes);
      notes2 = angular.copy(this.notes);
    };

  };
  angular.module('MyApp').controller('HomeController', HomeController)
}
