//Construtor - constructor

// function createAccount(username, accountNumber, inicialBalance) {
//     return {
//       name: username,
//       accountNumber,
//       balance: inicialBalance,
//       displayBalance: function () {
//         console.log(
//           `account number ${this.accountNumber} has a total balance of ${this.balance}`
//         );
//       },
//     };
//   }

//PascalCase (pascal case)

function Account(username, accountNumber, inicialBalance) {
  this.name = username;
  this.accountNumber = accountNumber;
  this.balance = inicialBalance;
  this.displayBalance = function () {
    console.log(
      `account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  };
}

const account1 = new Account("Gustavo Gregory", "12345678-9", 500);
console.log(account1);
account1.displayBalance();

const account2 = new Account("João Lira", "98765432-1", 50000);
console.log(account2);
account2.displayBalance();
