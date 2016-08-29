namespace MyApp {

    angular.module('MyApp', ['uiGmapgoogle-maps']).config((uiGmapGoogleMapApiProvider: any) => {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
        });

    });

}
