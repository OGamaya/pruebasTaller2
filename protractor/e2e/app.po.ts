import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchHero(search: string) {
    element(by.id('search-box')).sendKeys(search);
    browser.sleep(2000)
    element(by.cssContainingText('.search-result', search)).click()
    //element(by.buttonText('Add')).click();
  }

  getCurrentHeroProfileName() {
    return element(by.xpath('//h2[contains(text(), "details")]'))
    //return element(by.cssContainingText('h2', 'details'))
  }

  deleteOneHeroFromList() {
    element(by.buttonText('x')).click();
  }

  navigateToHeroDetailsFromList(hero: string) {
    element(by.xpath('//span[contains(text(), "'+hero+'")]')).click()
    element(by.buttonText('View Details')).click();
  }

  newNameToHero(newName: string) {
    element(by.tagName('input')).clear()
    element(by.tagName('input')).sendKeys(newName);
    element(by.buttonText('Save')).click();
    browser.sleep(2000)
  }
  getElementHeroOfList(name: string) {
      return element(by.xpath('//span[contains(text(), "'+name+'")]'))
  }
  navigateToHeroDetailsFromDashBoard(hero: string) {
    element(by.xpath('//h4[contains(text(), "'+hero+'")]')).click()
  }
}
