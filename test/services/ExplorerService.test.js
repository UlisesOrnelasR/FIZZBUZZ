const ExplorerService = require('./../../lib/services/ExplorerService')

describe('Pruebas para la clase ExplorerService',() => {
    
    test('Prueba 1: Filtrando explorers por mission',() => {
        const explorers = [{mission: 'node'}]
        const explorersNode = ExplorerService.filterByMission(explorers, 'node')
        
        expect(explorersNode.length).toBe(1)
    })

    test('Prueba 2: Obteniendo cuántos explorers estan en la mission', () => {
        const explorers = const explorers = [{mission: 'node'}]
        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')

    })


})