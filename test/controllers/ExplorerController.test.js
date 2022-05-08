const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe('Pruebas para ExplorerController', () => {

    test('Prueba filtrando lista de explorers por mission', () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);   
    })

    test('Probando el metodo getExplorersUsernamesByMission que regresa los usernames de los explorers filtrados por la mision enviada', () => {
        const usernamesfilters = ExplorerController.getExplorersUsernamesByMission('node')
        expect(usernamesfilters[0]).toBe('ajolonauta1')
    })
    
}) 