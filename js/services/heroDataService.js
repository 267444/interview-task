(function (angular) {
    'use strict';

    angular.module('hero')
        .factory('heroDataService', function ($http) {
            return {
                getHeroes() {
                    return $http.get('/data/heroes.json').then(response => response.data);
                }
            };
        });

})(window.angular);
