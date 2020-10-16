const { start } = require('repl')
const FileService = require('./services/FileService')

const fileService = new FileService();
//id,firstName,lastName,address: street,city,state, isActive
let Customer = {
    id: 1,
    firstName: 'fnabc',
    lastName: 'lnxyz',
    address: {
        street: 'street1',
        city: 'city1',
        state: 'state1',
        isActive: true,

    }
};

async function writeJsonFromString(data) {
    try {
        const status = await fileService.writeJsonFromString(data);
        console.log(status)
    } catch (err) {
        console.log(err)
    }
}
async function startApp() {
    //readOperation()
    //writeOperation('Hello,Node io')
    writeJsonFromString(Customer)

}
startApp();
