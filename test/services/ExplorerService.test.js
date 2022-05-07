
const ExplorerService = require('./../../lib/services/ExplorerService')

describe('Pruebas para la clase ExplorerService',() => {
    
    test('Prueba 1: Filtrando explorers por mission',() => {
        const explorers = [{mission: 'node'}]
        const explorersNode = ExplorerService.filterByMission(explorers, 'node')
        
        expect(explorersNode.length).toBe(1)
    })

    test('Prueba 2: Obteniendo cuántos explorers estan en la mission', () => {
        const explorers = [{mission: 'node'}]
        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')

        expect(explorersInMission).toBe(1)
    })

    test('Prueba 3: Obteniendo los username de los explorers en la mission ', () => {
        const explorers = [
            { githubUsername: "brandonruizmora", mission: "node" },
            { githubUsername: "carlo", mission: "node" },
            { githubUsername: "ferch", mission: "java" },
        ]
        const ExplorersMissionNames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(ExplorersMissionNames[0]).toBe('brandonruizmora')
    })


})