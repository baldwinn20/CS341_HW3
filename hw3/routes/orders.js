 

var express = require('express');
var router = express.Router();

//define the array of orders with fixed values
orderArray = [{
		"topping": "cherry",
		"quantity": "2",
	},
	{
		"topping": "plain",
		"quantity": "6",
	},
	{
		"topping": "chocolate",
		"quantity": "3",
	}
];


/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send(orderArray);
});

module.exports = router;
