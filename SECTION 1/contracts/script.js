const Web3 = require("web3")

const web3 = new Web3(web3Provider);

async function run() {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
}

run();