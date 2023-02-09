class Bank {
    // Creating private variable
    #balance = 0;
  
    // Constructor to set Person name
    constructor(name) {
      this.name = name;
    }
  
    // Setter Function to set balance
    setBalance(amount) {
      this.#balance = amount;
    }
  
    // Getter Function to get balance
    getBalance() {
      return this.#balance;
    }
  
    // Function to show balance
    showBalance() {
      if (this.name === 'AQEEL') {
        return `Your balance is ${this.getBalance()}`;
      } else {
        return `You are not authorized to view this balance!`;
      }
    }
  }