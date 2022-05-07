
class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInMission
    }
}

module.exports = ExplorerService