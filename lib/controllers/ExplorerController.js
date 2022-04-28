const Reader = require("./../utils/Reader")
const ExplorerService = require("./../services/ExplorerService")
const FizzzbuzzService = require("./../services/FizzbuzzService")

class ExplorerController{

    static getExplorersByMission(mission)
    {
        const explorer = Reader.readJsonFile("explorers.json")
        const explorersInMission1 = ExplorerService.filterByMission(explorer,mission)
        return explorersInMission1
    }

    static getExplorersUsernamesByMission(mission)
    {
        const explorer = Reader.readJsonFile("explorers.json")
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorer,mission)
        return explorersUsernames
    }
}

module.exports =ExplorerController