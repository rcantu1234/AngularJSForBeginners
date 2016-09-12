namespace app.Controllers {
  export class HomeController {
    public cars;
    public make;
    public model;
    public year;
    public price;

    constructor() {
      this.cars = new VehicleController('Ford', 'Focus', '2015', 25000);
    }
  }

  angular.module('app').controller('HomeController', HomeController);

  export class VehicleController {
    public make: string;
    public model: string;
    public year: string;
    public price: number;
    public vehicles = [];




    // cars = [
    //   {id: 1, make: 'Ford', model: 'Focus', year: 2008, CarMakeId: 1, price: 12000},
    //   {id: 2, make: 'Plymouth', model: 'Voyager', year: 2011, CarMakeId: 2, price: 14000},
    //   {id: 3, make: 'Toyota', model: 'Sienna', year: 2015, CarMakeId: 3, price: 25000},
    //   {id: 4, make: 'Isuzu', model: 'Ninja', year: 2010, CarMakeId: 4, price: 9000},
    //   {id: 5, make: 'Plymouth', model: 'Satelite', year: 1979, CarMakeId: 2, price: 2500},
    // ];

    // this.selectedCarId = this.cars[2];

    // makes = [
    //   {name: 'Ford', id: 1},
    //   {name: 'Plymouth', id: 2},
    //   {name: 'Toyota', id: 3},
    //   {name: 'Isuzu', id: 4}
    //   ];

    constructor(make, model, year, price) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
    }
  }
  angular.module('app').controller('VehicleController', VehicleController);

  // BEGINNING OF CAR CONTROLLLER
  export class CarController {
    public car1;
    public car2;
    public makes;

    constructor() {
      this.car1 = new VehicleController('Ford', 'Focus', '2008', 12000);
      this.car2 = new VehicleController('Plymouth', 'Voyager', '2011', 14000);
    }
  }
    angular.module('app').controller('CarController', CarController);


    // BEGINNING OF VAN CONTROLLER
  export class VanController {
    public van1;
    public van2;

    constructor() {
      this.van1 = new VehicleController('Toyota', 'Sienna', '2015', 25000);
      this.van2 = new VehicleController('Honda', 'Odyssey', '2013', 20000);
    }
  }
    angular.module('app').controller('VanController', VanController);


  // BEGINNING OF MOTORCYCLE CONTROLLER
  export class MotorcycleController {
    public motorcycle1;
    public motorcycle2;

    constructor() {
      this.motorcycle1 = new VehicleController('Kawasaki', 'Ninja', '2010', 9000);
      this.motorcycle2 = new VehicleController('Harley Davidson', 'Classic Electra Glide', '2016', 17000);
    }
  }
    angular.module('app').controller('MotorcycleController', MotorcycleController);
}
