const task3 = require('./answer/task-3');

describe('Soal 3', () => {
    it('SUM Number', () => {
        expect(task3([4, 5, 'a', 6, 7, 'b', 8, 9, 10, 'c'])).toEqual(49);
    });
});
