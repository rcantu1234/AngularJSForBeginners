var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        angular.module('MyApp', []);
        var TaxService = (function () {
            function TaxService() {
            }
            TaxService.prototype.CalculateTax = function (price) {
                return price * 0.08;
            };
            return TaxService;
        }());
        angular.module('MyApp').service('TaxService', TaxService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(TaxService) {
                this.message = 'AngularJS';
                this.friends = ['Cartman', 'Kyle', 'Timmy', 'Stan', 'Kenny'];
                this.cars = [
                    { year: 1989, make: 'VM', model: 'Fox' },
                    { year: 1988, make: 'Nissan', model: 'Sentra' },
                    { year: 1996, make: 'Ford', model: 'Explorer' },
                    { year: 2009, make: 'BMW', model: 'i325' },
                    { year: 2016, make: 'Tesla', model: 'Model S' },
                ];
                this.products = {
                    name: 'Milk',
                    price: 8.99,
                    tax: TaxService.CalculateTax(8.99)
                };
            }
            return HomeController;
        }());
        angular.module('MyApp').controller('HomeController', HomeController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsS0FBSyxDQVNkO0FBVEQsV0FBVSxLQUFLO0lBQUMsSUFBQSxRQUFRLENBU3ZCO0lBVGUsV0FBQSxRQUFRLEVBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1QjtZQUFBO1lBSUEsQ0FBQztZQUhDLGlDQUFZLEdBQVosVUFBYSxLQUFLO2dCQUNoQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDO1lBQ0gsaUJBQUM7UUFBRCxDQUFDLEFBSkQsSUFJQztRQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDLEVBVGUsUUFBUSxHQUFSLGNBQVEsS0FBUixjQUFRLFFBU3ZCO0FBQUQsQ0FBQyxFQVRTLEtBQUssS0FBTCxLQUFLLFFBU2Q7QUFHQyxJQUFVLEtBQUssQ0F5QmQ7QUF6QkQsV0FBVSxLQUFLO0lBQUMsSUFBQSxXQUFXLENBeUIxQjtJQXpCZSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQzNCO1lBTUUsd0JBQVksVUFBVTtnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1YsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztvQkFDdEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztvQkFDN0MsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQztvQkFDN0MsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztvQkFDeEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztpQkFDOUMsQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHO29CQUNkLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxJQUFJO29CQUNYLEdBQUcsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDbkMsQ0FBQztZQUNKLENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUF0QkQsSUFzQkM7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN2RSxDQUFDLEVBekJlLFdBQVcsR0FBWCxpQkFBVyxLQUFYLGlCQUFXLFFBeUIxQjtBQUFELENBQUMsRUF6QlMsS0FBSyxLQUFMLEtBQUssUUF5QmQiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgTXlBcHAuU2VydmljZXMge1xuICBhbmd1bGFyLm1vZHVsZSgnTXlBcHAnLCBbXSk7XG5cbiAgY2xhc3MgVGF4U2VydmljZSB7XG4gICAgQ2FsY3VsYXRlVGF4KHByaWNlKSB7XG4gICAgICByZXR1cm4gcHJpY2UgKiAwLjA4O1xuICAgIH1cbiAgfVxuICAgIGFuZ3VsYXIubW9kdWxlKCdNeUFwcCcpLnNlcnZpY2UoJ1RheFNlcnZpY2UnLCBUYXhTZXJ2aWNlKTtcbn1cbiAgLy8gYW5ndWxhci5tb2R1bGVcblxuICBuYW1lc3BhY2UgTXlBcHAuQ29udHJvbGxlcnMge1xuICAgIGNsYXNzIEhvbWVDb250cm9sbGVyIHtcbiAgICAgIHB1YmxpYyBmcmllbmRzO1xuICAgICAgcHVibGljIG1lc3NhZ2U7XG4gICAgICBwdWJsaWMgY2FycztcbiAgICAgIHB1YmxpYyBwcm9kdWN0cztcblxuICAgICAgY29uc3RydWN0b3IoVGF4U2VydmljZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnQW5ndWxhckpTJztcbiAgICAgICAgdGhpcy5mcmllbmRzID0gWydDYXJ0bWFuJywgJ0t5bGUnLCAnVGltbXknLCAnU3RhbicsICdLZW5ueSddO1xuICAgICAgICB0aGlzLmNhcnMgPSBbXG4gICAgICAgICAge3llYXI6IDE5ODksIG1ha2U6ICdWTScsIG1vZGVsOiAnRm94J30sXG4gICAgICAgICAge3llYXI6IDE5ODgsIG1ha2U6ICdOaXNzYW4nLCBtb2RlbDogJ1NlbnRyYSd9LFxuICAgICAgICAgIHt5ZWFyOiAxOTk2LCBtYWtlOiAnRm9yZCcsIG1vZGVsOiAnRXhwbG9yZXInfSxcbiAgICAgICAgICB7eWVhcjogMjAwOSwgbWFrZTogJ0JNVycsIG1vZGVsOiAnaTMyNSd9LFxuICAgICAgICAgIHt5ZWFyOiAyMDE2LCBtYWtlOiAnVGVzbGEnLCBtb2RlbDogJ01vZGVsIFMnfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHtcbiAgICAgICAgICBuYW1lOiAnTWlsaycsXG4gICAgICAgICAgcHJpY2U6IDguOTksXG4gICAgICAgICAgdGF4OiBUYXhTZXJ2aWNlLkNhbGN1bGF0ZVRheCg4Ljk5KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBhbmd1bGFyLm1vZHVsZSgnTXlBcHAnKS5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIEhvbWVDb250cm9sbGVyKTtcbiAgfVxuIl19