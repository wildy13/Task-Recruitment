const task5 = require('./answer/task-5');
const users = [
    {
        _id: 1,
        username: "Amin",
        role: "admin"
    },
    {
        _id: 2,
        username: "Prabroro",
        role: "user"
    },
    {
        _id: 3,
        username: "Janggar",
        role: "user"
    }
];
describe('Soal 5', () => {
    it('Kelompokan Data Array Berdasarkan Role', () => {
        expect(task5(users)).toEqual([{ role: "admin", users: [{ _id: 1, name: "Amin" }] }, { role: "user", users: [{ _id: 2, name: "Prabroro" }, { _id: 3, name: "Janggar" }] }]);
    });
});
