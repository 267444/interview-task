describe("heroList component", function () {
    let heroListController,
        heroA,
        heroB,
        heroC;

    beforeEach(function () {
        module("hero");

        inject(function ($componentController) {

            heroListController = $componentController("heroList", {}, {});
            heroListController.$onInit();

            heroA = { heroName: 'a' };
            heroB = { heroName: 'b' };
            heroC = { heroName: 'c' };
            heroListController.heroes = [heroB, heroA, heroC];
        });
    });

    describe("sortByName()", function () {
        it("should sort desc by default", function () {
            heroListController.sortByName();
            expect(heroListController.heroes).toEqual([ heroC, heroB, heroA ]);
            expect(heroListController.sortingDirection).toBe('up');
        });

        it("should sort the heroes desc", function () {
            heroListController.sortByName('down');
            expect(heroListController.heroes).toEqual([ heroC, heroB, heroA ]);
            expect(heroListController.sortingDirection).toBe('up');
        });

        it("should sort the heroes asc", function () {
            heroListController.sortByName('up');
            expect(heroListController.heroes).toEqual([ heroA, heroB, heroC ]);
            expect(heroListController.sortingDirection).toBe('down');
        });
    });
});
