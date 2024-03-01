const task2 = require('./answer/task-2');

describe('Soal 2', () => {
    it('Bilangan Genap', () => {
        expect(task2([4, 5, 'a', 6, 7, 'b', 8, 9, 10, 'c'])).toEqual([4, 6, 8, 10]);
    });
});
