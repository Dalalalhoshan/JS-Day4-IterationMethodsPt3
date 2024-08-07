// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

//*****************************************************************
//Part 1: Transaction Analysis
//Task 1) Create a new array containing only the income transactions.
//Output 1) [["income", 1000], ["income", 1500], ["income", 700]]
const incometrans = transactions.filter((transaction) => {
  if (transaction[0] == "income") {
    return transaction;
  }
});
console.log(incometrans);

//Task 2) Create a new array containing only the expense transactions.
//Output 2) [["expense", 500], ["expense", 300]]

const expensetrans = transactions.filter((transaction) => {
  if (transaction[0] == "expense") {
    return transaction;
  }
});
console.log(expensetrans);
/******************************************************************/
//*****************************************************************
//Part 2: Financial Summary
//Task 3) Calculate the total income and return it.
//Output 3) 3200

let totalIncome = 0;
const calcTotal = transactions.forEach((transaction) => {
  if (transaction[0] == "income") {
    totalIncome = totalIncome + transaction[1];
  }
});

console.log(totalIncome);

//Task 4) Calculate the total expenses and return it.
//Output 4) 800

let totalexpence = 0;
const calcTotal2 = transactions.forEach((transaction) => {
  if (transaction[0] == "expense") {
    totalexpence = totalexpence + transaction[1];
  }
});

console.log(totalexpence);

//******************************************************************/
/*****************************************************************/
//Part 3: Net Analysis
//Task 5) Calculate the net total (total income - total expenses) and return it.
//Output 5) 2400
const netTotal = totalIncome - totalexpence;
console.log(netTotal);

//Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
//Output 6) [["income", 1000], ["income", 1500]]

const transAbove500 = transactions.filter((transaction) => {
  if (transaction[1] > 500) {
    return true;
  }
});
console.log(transAbove500);

/******************************************************************/
// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
