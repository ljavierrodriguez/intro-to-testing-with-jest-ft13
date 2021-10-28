const { suma, resta } = require('./main');



describe('Listado de Pruebas sobre funciones matematicas', () => {
    test('Probando la function suma', () => {
        expect(suma(10, 8)).toBe(18);
    })

    test('Probando la function resta', () => {
        expect(resta(10, 8)).toBe(2);
    })
})

describe('Listado de Pruebas sobre funciones matematicas trigonometricas', () => {
    test('Probando la function suma', () => {
        expect(suma(10, 8)).toBe(18);
    })

    it('Probando la function resta', () => {
        expect(resta(10, 8)).toBe(2);
    })
})