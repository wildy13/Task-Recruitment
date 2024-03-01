const task4 = require('./answer/task-4');

describe('Soal 4', () => {
    it('Menghitung huruf', () => {
        expect(task4([4, 5, 'a', 6, 7, 'b', 8, 9, 10, 'c'])).toEqual({ a: 1, b: 1, c: 1 });
    });
});
