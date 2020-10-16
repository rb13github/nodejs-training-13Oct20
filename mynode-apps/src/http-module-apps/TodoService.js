const TODOS = require('../mock-data/TODOSLIST');


class TodoService {

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, JSON.stringify(TODOS));
        });
    }

}
module.exports = new TodoService();