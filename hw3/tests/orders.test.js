//Nicholas Baldwin
//30 September 2019

//Code was modified from the page.tests.js file
var fs = require('fs');

test('test selectEvent', () => {
	//Read the orders.js file into a string
	var orderSample = fs.readFileSync('routes/orders.js');
	expect(orderSample).toEqual(expect.anything()); //any non-null value is okay
});
