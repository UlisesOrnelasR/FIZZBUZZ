const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe('Pruebas para FizzbuzzService', () => {

    test('Test para ver si funciona el ejercicio de FIZZBUZZ',() => {
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

        expect(explorer1).toEqual({name: "Explorer1", score: 1, trick: 1})

    })


})