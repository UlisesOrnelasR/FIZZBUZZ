const fs = require("fs");

// Part 1 Read json file ===========================
const rawdata = fs.readFileSync("explorers.json");
const explorers = JSON.parse(rawdata);

// Part 2: Get the quantity of explorers names in node
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
//console.log(explorersInNode.length)

// Part4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
//console.log(usernamesInNode)

const assignTrick = function(explorer){
    if(explorer.score%3 == 0 && explorer.score%5 == 0){
        explorer.trick = 'FIZZBUZZ'
        return explorer
    }
    else if(explorer.score%3 == 0){
        explorer.trick = 'FIZZ'
        return explorer
    }
    else if(explorer.score%5 == 0){
        explorer.trick = 'BUZZ'
        return explorer
    }
    else{
        explorer.trick = explorer.score
        return explorer
    }
};

const explorersInNodeTrick = explorersInNode.map((explorer) => assignTrick(explorer));

console.log(explorersInNodeTrick)
