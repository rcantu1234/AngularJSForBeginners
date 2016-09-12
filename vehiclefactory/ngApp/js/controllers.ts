namespace MyApp.Controllers {
  export class HomeController {

    constructor() {

    }
  }
  angular.module('MyApp').controller('HomeController', HomeController);

  export class VehicleController {
    public vehicles;
    public selectedVehicleId;

    constructor() {
        this.vehicles = [
          {id: 1, type: 'car', CarMakeId: 1},
          {id: 2, type: 'van', CarMakeId: 2},
          {id: 3, type: 'motorcycle', CarMakeId: 3}
        ]
        this.selectedVehicleId = this.vehicles[2];
    }
  }
  angular.module('MyApp').controller('VehicleController', VehicleController);

  export class CarController {
    // let temp;
    public selectedCarId;
    public cars;
    public makes;
    public filterCars;
    public makeIdSelected;
    public checkboxFilter;


    makeSelect(makeObj){
      this.makeIdSelected = makeObj;
      console.log('makeselect hit')
      let id = makeObj.id;
      console.log('id: ',id);
      if (this.makes[0]['id'] === id) {
        console.log('ID : ' + this.makes[0]['id']);
      } else {
        console.log('NOT FOUND!');
      }
      this.filterCars = this.cars.filter((car) =>{ return car.CarMakeId == id;});
      console.log(this.filterCars);
    }

    constructor() {

      this.cars = [
        {id: 1, make: 'Ford', model: 'Focus', year: 2008, CarMakeId: 1, price: 12000},
        {id: 2, make: 'Plymouth', model: 'Voyager', year: 2011, CarMakeId: 2, price: 14000},
        {id: 3, make: 'Toyota', model: 'Sienna', year: 2015, CarMakeId: 3, price: 25000},
        {id: 4, make: 'Isuzu', model: 'Ninja', year: 2010, CarMakeId: 4, price: 9000},
        {id: 5, make: 'Plymouth', model: 'Satelite', year: 1979, CarMakeId: 2, price: 2500},
      ];

      this.selectedCarId = this.cars[2];

      this.makes = [
      	{name: 'Ford', id: 1},
      	{name: 'Plymouth', id: 2},
      	{name: 'Toyota', id: 3},
      	{name: 'Isuzu', id: 4}
      	];

      this.makeIdSelected = this.makes[2];

      // this.makeSelect = function(id) {
      //   this.makeIdSelected = id;
      //   return this.makeIdSelected;
      // }

      this.filterCars =
       this.cars.filter((car) => {
             return car.CarMakeId == car.id;
           });

        //    this.checkboxFilter = function() {
        //      if (this.makes[0]['id'] === 0) {
        //        console.log('ID : ' + this.makes[0]['id']);
        //      } else if (this.makes[0]['id'] === 1) {
        //        console.log('ID : ' + this.makes[0]['id']);
        //    } else if (this.makes[0]['id'] === 2) {
        //      console.log('ID : ' + this.makes[0]['id']);
        //   }
        // }
     //}
    }
  }
  angular.module('MyApp').controller('CarController', CarController);
}
