var MyApp;
(function (MyApp) {
    var Food;
    (function (Food) {
        angular.module('MyApp', []);
        var FoodController = (function () {
            function FoodController() {
                this.food = ['Milk', 'Maripan', 'Mustard', 'Eggs'];
            }
            return FoodController;
        }());
        angular.module('MyApp').controller('FoodController', FoodController);
    })(Food = MyApp.Food || (MyApp.Food = {}));
})(MyApp || (MyApp = {}));
