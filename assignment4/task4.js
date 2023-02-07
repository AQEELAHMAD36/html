class Account {
    #accountId
    #accountTitle
    #balance
    #emailId

    // Setter Methods
    setId = id => {
        this.#accountId = id;
    }

    setTitle = title => {
        this.#accountTitle = title;
    }

    setBalance = balance => {
        this.#balance = balance;
    }

    setEmail = email => {
        this.#emailId = email;
    }

    // Getter Methods

    getId = id => this.#accountId

    getTitle = title => this.#accountTitle

    getBalance = balance => this.#balance

    getEmail = email => this.#emailId

    depositAmount = amount => {
        this.#balance += amount;
        console.log("Balance: " , this.#balance);
    }

    withdrawAmount = amount => {
        if (amount > this.#balance)
            return console.log("Insufficient Funds!")
        this.#balance -= amount;
        console.log("Balance: " , this.#balance);
    }
}

const acc1 = new Account();
acc1.setId(1)
acc1.setTitle("Aqeel")
acc1.setBalance(1000)
acc1.setEmail("example@example.com");
console.log(acc1.getId()); // 1
console.log(acc1.getTitle()); // Aqeel
console.log(acc1.getBalance()); // 1000
console.log(acc1.getEmail()); // example@example.com
acc1.depositAmount(2000) // 3000
acc1.withdrawAmount(2000); // 1000
acc1.withdrawAmount(2000) // Insufficient Funds!