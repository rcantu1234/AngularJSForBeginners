namespace MyApp.Controllers {

  let guitars = [
    {id: 1, make: 'Gibson', model: 'Les Paul Studio', price: 1200.00},
    {id: 2, make: 'Ibanez', model: 'Blazer', price: 600.00},
    {id: 3, make: 'Fender', model: 'Stratocaster', price: 800.00}
  ];

  export class GuitarController {
    public guitars = guitars;

    // constructor() {
    //   this.guitars = guitars;
    // }
  }

  export class GuitarDetailsController {
    public product;

    constructor($stateParams: ng.ui.IStateParamsService) {
      this.product = guitars.filter((g) => g.id == $stateParams['id'])[0];
    }
  }
}
