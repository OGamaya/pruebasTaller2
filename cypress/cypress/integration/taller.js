describe('Los estudiantes nueva cuenta', function() {
    it('Visits los estudiantes and create a new User', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pedro")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Perez")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pedro@example.com")
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
        cy.get('.cajaSignUp').contains('Estudio una maestria').children().check();
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').find('input[name="acepta"]').check();
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Registro exitoso!')
        cy.contains('Ok').click()
    })
    it('Visits los estudiantes and success at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("pedro@example.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.wait(2000)
        cy.contains('Ingresar.').should('not.exist')
    })
    it('Visits los estudiantes and create a existed User', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pedro")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Perez")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pedro@example.com")
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
        cy.get('.cajaSignUp').contains('Estudio una maestria').children().check();
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').find('input[name="acepta"]').check();
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Error: Ya existe un usuario registrado con el correo \'pedro@example.com\'')
        cy.contains('Ok').click()
    })
})


describe('Los estudiantes funcionalidad de busqueda', function() {
    it('Visits los estudiantes and test the teachers search', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Si estudias una maestria haz click aqui').click()
        cy.get('.select').select("Maestría en Ingeniería de Software")
        cy.contains('Mario Linares Vasquez')
    })
})

describe('Los estudiantes ir al perfil de un profesor', function() {
    it('Visits los estudiantes and go to the teacher\'s page', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Si estudias una maestria haz click aqui').click()
        cy.get('.select').select("Maestría en Ingeniería de Software")
        cy.contains('Mario Linares Vasquez').click()
        cy.contains('Califica a este profesor')
    })
})
describe('Los estudiantes filtro de materias del profesor', function() {
    it('Visits los estudiantes and test the subjects filter', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Si estudias una maestria haz click aqui').click()
        cy.get('.select').select("Maestría en Ingeniería de Software")
        cy.contains('Mario Linares Vasquez').click()
        cy.get('.materias').find('input[name="id:ISIS3510"]').check()
        cy.wait(2000)
        cy.get('.columnMiddle').find('.labelHover').children('a').not('a[href$="ISIS3510"]').should('not.exist')
    })
})
