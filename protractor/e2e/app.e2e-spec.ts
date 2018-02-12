import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

// Solución al tutorial
describe('Tour of heroes, search hero', () => {
  let page : TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('Should go to a hero profile', () => {
    page.navigateTo();
    page.searchHero("Mr. Nice")
    expect(page.getCurrentHeroProfileName().getText()).toBe("Mr. Nice details!");
  });

});

describe('Tour of heroes, heros page 2', () => {
  let page : TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('Should delete a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteOneHeroFromList();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('Now edit a Hero', () => {
    const oldName = "Narco"
    const newName = "Zarco"

    page.navigateToHeroDetailsFromList(oldName)
    page.newNameToHero(newName)
    expect(page.getElementHeroOfList(newName).getText()).toBe(newName);
  });
});

describe('Tour of heroes, some navigatios', () => {
  let page : TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('Hero profile from Dashboard', () => {
    const hero = "Mr. Nice"
    page.navigateTo()
    page.navigateToHeroDetailsFromDashBoard(hero)
    expect(page.getCurrentHeroProfileName().getText()).toBe(hero+" details!");

  });

  it('Hero profile from List', () => {
    const hero = "Dynama"

    page.navigateToHeroes();
    page.navigateToHeroDetailsFromList(hero)
    expect(page.getCurrentHeroProfileName().getText()).toBe(hero+" details!");
  });

  it('Hero profile from Search', () => {
    page.navigateTo();
    page.searchHero("Mr. Nice")
    expect(page.getCurrentHeroProfileName().getText()).toBe("Mr. Nice details!");
  });

});
