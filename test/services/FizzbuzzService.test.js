const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe('Pruebas para FizzbuzzService', () => {

    test('Test para que escriba como valor del trick, el score',() => {
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

        expect(explorer1).toEqual({name: "Explorer1", score: 1, trick: 1})
    })

    test('Test para cuando la llave de trick sea FIZZ  ', () => {
        const explorer2 = {name: "Explorer2", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer2)

        expect(explorer2).toEqual({name: 'Explorer2', score: 3, trick: 'FIZZ'})
        

    })


})