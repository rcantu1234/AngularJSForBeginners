var MyApp;
(function (MyApp) {
    var Food;
    (function (Food) {
        angular.module('MyApp', []);
        var FoodController = (function () {
            function FoodController() {
                this.foods = [
                    { name: 'Milk', price: 2.33, dateCreated: new Date('12/31/1977') },
                    { name: 'Marzipan', price: 99.88, dateCreated: new Date('1/8/1992') },
                    { name: 'Mustard', price: 6.77, dateCreated: new Date('12/04/1972') },
                    { name: 'Eggs', price: 3.44, dateCreated: new Date('12/04/1973') }
                ];
            }
            return FoodController;
        }());
        angular.module('MyApp').controller('FoodController', FoodController);
    })(Food = MyApp.Food || (MyApp.Food = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsS0FBSyxDQW1CZDtBQW5CRCxXQUFVLEtBQUs7SUFBQyxJQUFBLElBQUksQ0FtQm5CO0lBbkJlLFdBQUEsSUFBSSxFQUFDLENBQUM7UUFFdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFNUI7WUFJRTtnQkFFRSxJQUFJLENBQUMsS0FBSyxHQUFHO29CQUNYLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQztvQkFDaEUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDO29CQUNuRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUM7b0JBQ25FLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQztpQkFDakUsQ0FBQztZQUNKLENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUFiRCxJQWFDO1FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDdkUsQ0FBQyxFQW5CZSxJQUFJLEdBQUosVUFBSSxLQUFKLFVBQUksUUFtQm5CO0FBQUQsQ0FBQyxFQW5CUyxLQUFLLEtBQUwsS0FBSyxRQW1CZCIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBNeUFwcC5Gb29kIHtcblxuYW5ndWxhci5tb2R1bGUoJ015QXBwJywgW10pO1xuXG5jbGFzcyBGb29kQ29udHJvbGxlciB7XG4gIHB1YmxpYyBmb29kcztcbiAgcHVibGljIHNlYXJjaDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0aGlzLmZvb2RzID0gWydNaWxrJywgJ01hcmlwYW4nLCAnTXVzdGFyZCcsICdFZ2dzJ107XG4gICAgdGhpcy5mb29kcyA9IFtcbiAgICAgIHtuYW1lOiAnTWlsaycsIHByaWNlOiAyLjMzLCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoJzEyLzMxLzE5NzcnKX0sXG4gICAgICB7bmFtZTogJ01hcnppcGFuJywgcHJpY2U6IDk5Ljg4LCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoJzEvOC8xOTkyJyl9LFxuICAgICAge25hbWU6ICdNdXN0YXJkJywgcHJpY2U6IDYuNzcsIGRhdGVDcmVhdGVkOiBuZXcgRGF0ZSgnMTIvMDQvMTk3MicpfSxcbiAgICAgIHtuYW1lOiAnRWdncycsIHByaWNlOiAzLjQ0LCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoJzEyLzA0LzE5NzMnKX1cbiAgICBdO1xuICB9XG59XG4gIGFuZ3VsYXIubW9kdWxlKCdNeUFwcCcpLmNvbnRyb2xsZXIoJ0Zvb2RDb250cm9sbGVyJywgRm9vZENvbnRyb2xsZXIpO1xufVxuIl19