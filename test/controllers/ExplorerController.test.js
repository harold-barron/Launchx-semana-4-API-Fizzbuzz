const ExplorerController = require ("./../../lib/controllers/ExplorerController")

describe("Test for Explorer Controller", ()=>
{
    test("1. Gettin de list of explorers with a specific mission",()=>
    {
        const controller = ExplorerController.getExplorersByMission("node")
        const ExplorersWithNode = controller.forEach(expName => expect(expName.mission).toContain("node"));
    })
    test("2. Gettin de names of the explorers in a specific mission",()=>
    {
        const controller = ExplorerController.getExplorersUsernamesByMission("node")
        console.log(controller)
        
    })
})


