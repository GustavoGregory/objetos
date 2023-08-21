//Função fabrica - Factory Function

function createAccount(username, accountNumber, inicialBalance) {
  return {
    name: username,
    accountNumber,
    balance: inicialBalance,
    displayBalance: function () {
      console.log(
        `account number ${this.accountNumber} has a total balance of ${this.balance}`
      );
    },
  };
}

const account1 = createAccount("Gustavo Gregory", "12345678-9", 500);
console.log(account1);
account1.displayBalance();

const account2 = createAccount("João Lira", "98765432-1", 50000);
console.log(account2);
account2.displayBalance();
