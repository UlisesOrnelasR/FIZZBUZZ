
class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission)
        return explorersInMission.length
    }
}

module.exports = ExplorerService