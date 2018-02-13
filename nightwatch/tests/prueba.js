  module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login falied': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
      .setValue('.cajaLogIn input[name="password"]', '1234')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('.aviso.alert.alert-danger', 4000)
      .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
      .end();
  },
  'Los estudiantes create user': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaSignUp input[name="nombre"]', 'Pedro')
      .setValue('.cajaSignUp input[name="apellido"]', 'Perez')
      .setValue('.cajaSignUp input[name="correo"]', 'perez@example.com')
      .click('.cajaSignUp input[type="checkbox"]')
      .click('select[name="idPrograma"] option[value="16"]')
      .setValue('.cajaSignUp input[name="password"]', '12345678')
      .click('input[name="acepta"]')
      .click('.cajaSignUp .logInButton')
      .waitForElementVisible('h2', 4000)
      .assert.containsText('h2', 'Registro exitoso!')
      .end();

},
'Los estudiantes login success': function(browser) {
  browser
    .url('https://losestudiantes.co/')
    .click('.botonCerrar')
    .waitForElementVisible('.botonIngresar', 4000)
    .click('.botonIngresar')
    .setValue('.cajaLogIn input[name="correo"]', 'perez@example.com')
    .setValue('.cajaLogIn input[name="password"]', '12345678')
    .click('.cajaLogIn .logInButton')
    .waitForElementVisible('.usrImage', 4000)
    .assert.elementPresent(".usrImage")
    .end();
},
'Los estudiantes create exist user': function(browser) {
  browser
    .url('https://losestudiantes.co/')
    .click('.botonCerrar')
    .waitForElementVisible('.botonIngresar', 4000)
    .click('.botonIngresar')
    .setValue('.cajaSignUp input[name="nombre"]', 'Pedro')
    .setValue('.cajaSignUp input[name="apellido"]', 'Perez')
    .setValue('.cajaSignUp input[name="correo"]', 'perez@example.com')
    .click('.cajaSignUp input[type="checkbox"]')
    .click('select[name="idPrograma"] option[value="16"]')
    .setValue('.cajaSignUp input[name="password"]', '12345678')
    .click('input[name="acepta"]')
    .click('.cajaSignUp .logInButton')
    .waitForElementVisible('div .lead', 4000)
    .assert.containsText('div .lead', 'Error: Ya existe un usuario registrado con el correo \'perez@example.com\'')
    .end();

},
'Los estudiantes subject filter': function(browser) {
  browser
    .url('https://losestudiantes.co/')
    .click('.botonCerrar')
    .waitForElementVisible('.profesor', 4000)
    .click('.profesor a')
    .waitForElementVisible('.materias', 4000)
    .click('.materias .labelHover input')
    .waitForElementVisible('.infoProfesor', 4000)
    .assert.containsText('div .infoProfesor', 'en las materias seleccionadas')
    .end();

},
};
