/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let obj = {}

  for(let i=0; i<transactions.length; i++){
    if (obj.hasOwnProperty(transactions[i]["category"])) {
      obj[transactions[i]["category"]] += transactions[i]["price"]
    } else {
      obj[transactions[i]["category"]] = transactions[i]["price"]
    }
  }

  let ans = []

  for (let key in obj) {
    // console.log();
    ans.push({
      category : key,
      totalSpent : obj[key],
    })
  }

  return ans;
  // console.log(ans);
}

module.exports = calculateTotalSpentByCategory;
