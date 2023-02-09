class Student {
    constructor(name, rollNumber, phoneNumber, address) {
      this.name = name;
      this.rollNumber = rollNumber;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  }
  
  let sam = new Student('Sam', 123, 1234567890, '123 Street');
  let john = new Student('John', 456, 9876543210, '456 Avenue');
  
  console.log(`Roll Number of Sam: ${sam.rollNumber}`);
  console.log(`Phone Number of Sam: ${sam.phoneNumber}`);
  console.log(`Address of Sam: ${sam.address}`);
  
  console.log(`Roll Number of John: ${john.rollNumber}`);
  console.log(`Phone Number of John: ${john.phoneNumber}`);
  console.log(`Address of John: ${john.address}`);