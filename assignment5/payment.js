class Payment {
    constructor(amount) {
      this.amount = amount;
    }
  
    paymentDetails() {
      return `The payment amount is $${this.amount}.`;
    }
  }
  
  class CashPayment extends Payment {
    constructor(amount) {
      super(amount);
    }
  
    paymentDetails() {
      return `The payment is in cash. ${super.paymentDetails()}`;
    }
  }
  
  class CreditCard {
    constructor(nameOnCard, expirationDate, cardNumber) {
      this.nameOnCard = nameOnCard;
      this.expirationDate = expirationDate;
      this.cardNumber = cardNumber;
    }
  }
  
  class CardPayment extends Payment {
    constructor(amount, creditCard) {
      super(amount);
      this.creditCard = creditCard;
    }
  
    paymentDetails() {
      return `The payment is made with card. Card owner: ${this.creditCard.nameOnCard}. Card number: ${this.creditCard.cardNumber}. Expiration date: ${this.creditCard.expirationDate}. ${super.paymentDetails()}`;
    }
  }
  
  const payments = [
    new CashPayment(100),
    new CashPayment(200),
    new CardPayment(300, new CreditCard('John Doe', '01/2025', '1234567812345678')),
    new CardPayment(400, new CreditCard('Jane Doe', '02/2026', '2345678923456789'))
  ];
  
  for (const payment of payments) {
    console.log(payment.paymentDetails());
  }
  