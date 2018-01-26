(functionJ() {
    var app = angular.module('XSkhoj');
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: '/app/components/home/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl' 
        });
    }]);
})();