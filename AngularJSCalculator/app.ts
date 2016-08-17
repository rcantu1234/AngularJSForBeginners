namespace MyApp {
  angular.module('MyApp', []);

  class CalculatorController {
    public num1;
    public num2;
    public result;

    addNumbers(num1, num2) {
      this.result = num1 + num2;
    }
  }
  angular.module('MyApp').controller('CalculatorController', CalculatorController);
}
