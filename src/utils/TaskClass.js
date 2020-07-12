class TaskClass {
    constructor(category, title, done, id) {
        this[id] = {
            category: category,
            title: title,
            done: done
        }
    }

}

/* const example = new TaskClass('category', 'title');
console.log(ejemplo); */

module.exports = { TaskClass }