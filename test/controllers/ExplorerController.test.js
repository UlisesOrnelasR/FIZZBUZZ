const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe('Pruebas para ExplorerController', () => {
    test('Prueba filtrando lista de explorers por mission', () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(9);   

    })
}) 