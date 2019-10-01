//Nicholas Baldwin
//30 September 2019

const sum = require('../public/javascripts/sum.js');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});
