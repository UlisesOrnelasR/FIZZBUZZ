const ExplorerService = require('./../../lib/services/ExplorerService')

describe('Pruebas para la clase ExplorerService',() => {
    
    test('Prueba 1: Filtrando explorers por mission',() => {
        explorersNode = ExplorerService.filterByMission(explorers, 'node')
        expect(explorersNode).not.toBeUndefined() 
    })


})