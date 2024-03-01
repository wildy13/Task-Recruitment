const task1 = require('./soal/task-1');
const task2 = require('./soal/task-2');
const task3 = require('./soal/task-3');
const task4 = require('./soal/task-4');

describe('Soal ', () => {
  it('Reverse Word', () => {
    expect(task1(['ayam','bebek','dinosaurus','burung'])).toEqual(['maya','kebeb','suruasonid','gnurub']);
  });


  it('Bilangan Genap', () => {
    expect(task2([4,5,'a',6,7,'b',8,9,10,'c'])).toEqual([4,6,8,10]);
  });
  
  it('SUM Number', () => {
    expect(task3([4,5,'a',6,7,'b',8,9,10,'c'])).toEqual(49);
  });
  
  it('Menghitung huruf', () => {
    expect(task4([4,5,'a',6,7,'b',8,9,10,'c'])).toEqual({ a: 1, b: 1, c: 1 });
  });

});
