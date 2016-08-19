var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var guitars = [
            { id: 1, make: 'Gibson', model: 'Les Paul Studio', price: 1200.00 },
            { id: 2, make: 'Ibanez', model: 'Blazer', price: 600.00 },
            { id: 3, make: 'Fender', model: 'Stratocaster', price: 800.00 }
        ];
        var GuitarController = (function () {
            function GuitarController() {
                this.guitars = guitars;
            }
            return GuitarController;
        }());
        Controllers.GuitarController = GuitarController;
        var GuitarDetailsController = (function () {
            function GuitarDetailsController($stateParams) {
                this.product = guitars.filter(function (g) { return g.id == $stateParams['id']; })[0];
            }
            return GuitarDetailsController;
        }());
        Controllers.GuitarDetailsController = GuitarDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
