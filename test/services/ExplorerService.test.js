const ExplorerService = require('./../../lib/services/ExplorerService')

describe('Pruebas para la clase ExplorerService',() => {
    
    test('Prueba 1: Filtrando explorers por mission',() => {
        const explorers = [{mission: 'node'}]
        const explorersNode = ExplorerService.filterByMission(explorers, 'node')
        
        expect(explorersNode.length).toBe(1)
    })

    


})