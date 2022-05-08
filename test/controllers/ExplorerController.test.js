const ExplorerService = require('../../lib/services/ExplorerService');
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

    test('Prueba 3 probando el metodo getExplorersAmonutByMission que regresa la cantidad de explorers en la mission', () => {
        const NumExplorersInMission = ExplorerService.getExplorersAmonutByMission('node')

        expect(NumExplorersInMission).toBe(10)
    })
    
}) 