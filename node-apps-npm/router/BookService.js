const mongojs = require('mongojs')

//connecting to mongo db with collection
//mongojs('connectionString') ; incase localhost /default port is taken automaticall
const db = mongojs('db')
const books = db.collection('patient')

class BookService {
    constructor() { }
    findAll() {
        return new Promise((resolve, reject) => {
            db.books.find((err, docs) => {
                if (err) {
                    reject(err)
                }
                resolve(docs);
            });
        });

    }
}
module.exports = new BookService();