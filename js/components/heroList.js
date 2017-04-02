(function (angular) {
    'use strict';

    angular.module('hero')
        .component('heroList', {
            templateUrl: '/js/components/heroList.html',
            controller: function (heroDataService, HeroObj) {
                let vm = this;

                vm.$onInit = function () {
                    vm.heroes = [];
                    vm.sortingDirection = '';
                    vm.sortingType = '';
                    vm.sortByName = sortByName;
                    vm.sortByTeam = sortByTeam;
                };

                activate();

                function activate(){
                    _fetchHeroes();
                }

                function _fetchHeroes(){
                    heroDataService
                        .getHeroes()
                        .then(_handleHeroesData)
                        .catch(_handleHeroesError);
                }

                function _handleHeroesData(heroesData){
                    _createHeroes(heroesData);
                }

                function _handleHeroesError(error) {
                    console.error(error);
                }

                function _createHeroes(heroesData){
                    for (let theBug of heroesData) {
                        vm.heroes.push(new HeroObj({name: theBug.name, team: theBug.team, attributes: theBug.attributes}))
                    }
                }

                function sortByName(direction) {
                    sortByType(direction, 'heroName');
                }
                
                function sortByTeam(direction) {
                    sortByType(direction, 'teamName');
                }
                
                function sortByType(direction, type) {
                    if (!direction || direction == "down" || vm.sortingType !== type) {
                        vm.sortingDirection = 'up';
                        vm.heroes = vm.heroes.sort(function (a, b) {
                            return a[type].localeCompare(b[type]);
                        });
                        vm.heroes.reverse();
                    } else {
                        vm.sortingDirection = 'down';
                        vm.heroes = vm.heroes.sort(function (a, b) {
                            return a[type].localeCompare(b[type]);
                        });
                    }
                    vm.sortingType = type;
                }
            }
        });

})(window.angular);
