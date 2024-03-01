const task1 = require('./answer/task-1');

describe('Soal 1 ', () => {
  it('Reverse Word', () => {
    expect(task1(['ayam','bebek','dinosaurus','burung'])).toEqual(['maya','kebeb','suruasonid','gnurub']);
  });
});
