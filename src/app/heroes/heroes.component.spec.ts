import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe("HeroComponent", () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ]

        mockHeroService = jasmine.createSpyObj(["getHeroes", "addHero", "deleteHero"]);

        component = new HeroesComponent(mockHeroService);
    })

    describe("delete", () => {
        it("should remove the indicated hero from the heroes list", () => {
            // Arrange
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            // Act
            component.delete(HEROES[2]);

            // Expect
            expect(component.heroes.length).toBe(2);
        })

        it("should call deleteHero with the correct hero", () => {
            // Arrange
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            // Act
            component.delete(HEROES[2]);

            // Expect
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })
    })
})