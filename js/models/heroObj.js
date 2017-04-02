(function (angular) {
    'use strict';

    angular.module('hero')
        .service('HeroObj', function () {
            return function HeroObj(options) {
                this.heroName = options.name || 'unnamed'
                this.teamName = options.team || 'foo'
                this.attributes = {
                    speed: options.attributes.speed,
                    strength: options.attributes.strength,
                    intelligence: options.attributes.intelligence
                };
                this.getHighestRating = function () {
                    let highestRating = Math.max(this.attributes.speed, Math.max(this.attributes.strength, this.attributes.intelligence));
                    return highestRating;
                };
                this.getName = function () {


                    return this.heroName;
                };
                this.formatName = function () {
                    return this.heroName
                }
            }
        });

})(window.angular);
