var MyApp;
(function (MyApp) {
    angular.module('MyApp', []);
    var CalculatorController = (function () {
        function CalculatorController() {
        }
        CalculatorController.prototype.addNumbers = function (num1, num2) {
            this.result = num1 + num2;
        };
        return CalculatorController;
    }());
    angular.module('MyApp').controller('CalculatorController', CalculatorController);
})(MyApp || (MyApp = {}));
