var assert = require('assert');
describe('los estudiantes login ', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.windowHandleMaximize (false);
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 3000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });
  });
describe('los estudiantes search ', function() {
    it('should visit los estudiantes and seach teacher', function () {
        browser.windowHandleMaximize (false);
        browser.url('https://losestudiantes.co');

        browser.waitForVisible('.opcion_maestria_click', 5000);

        browser.waitForVisible('.opcion_maestria_click')
        browser.element('.opcion_maestria_click').click();
        browser.element('select').selectByVisibleText("Maestría en Ingeniería de Software")
        browser.scroll();
        //browser.waitForVisible(, 5000);
        var text = browser.element('//div[text="Mario Linares Vasquez"]').getText()
        expect(text).toBe('Mario Linares Vasquez');
    });
  });
describe('los estudiantes go to page ', function() {

    it('should visit los estudiantes and go to the teacher page', function () {
      browser.windowHandleMaximize (false);
      browser.url('https://losestudiantes.co');

      browser.waitForVisible('.opcion_maestria_click', 5000);
      browser.waitForVisible('.opcion_maestria_click')
      browser.element('.opcion_maestria_click').click();
      browser.element('select').selectByVisibleText("Maestría en Ingeniería de Software")
      browser.scroll();
      browser.element('//div[text="Mario Linares Vasquez"]').click()
      var text = browser.element('.nombreProfesor').getText()
      expect(text).toBe('Mario Linares Vasquez');
    });
});
