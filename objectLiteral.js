//object literal
const account1 = {
  name: "Gustavo Gregory",
  accountNumber: "12345678-9",
  balance: 500,
  displayBalance: function () {
    console.log(
      `account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  },
};

const account2 = {
  name: "João Lira",
  accountNumber: "98765432-1",
  balance: 50000,
  displayBalance: function () {
    console.log(
      `account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  },
};

console.log(account1);
account1.displayBalance();
