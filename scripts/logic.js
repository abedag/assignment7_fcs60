//There is a time complexity of O(n) where n is the input (students)
//There is a time complexity of O(m) where m is the number of scores for each student
//The overall time complexity is O(n*m)
function generateReports(students) {
  return students.map(student => {
    const total = student.scores.reduce((sum, score) => sum + score ,0);
    const average = Math.round(total/student.scores.length);

    let grade;
    if (average >= 90) { grade = "A" }
    else if (average >= 80) { grade = "B" }
    else if (average >= 70) { grade = "C" }
    else if (average >= 60) { grade = "D" }
    else { grade = "F" }

    return {
      name: student.name,
      average: average,
      grade: grade
    }
  })
}

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [70, 68, 72] },
  { name: "Charlie", scores: [100, 100, 100] }
]

const display = generateReports(students);

const updated = display.map(student => {
  return `Name: ${student.name}, Average: ${student.average}, Grade: ${student.grade}`;
}).join('\n');

document.getElementById("Output").textContent = updated;


// ==> The time complexity of this class is O(1) since all methods are constant time operations 
class BankAccount {
  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.history = [];
  }
//O(1)
  deposit(amount) {
    if (amount > 0) { 
      this.balance += amount;
      console.log(`${this.ownerName} deposited $${amount}`);
      const depo = `Deposited $${amount}`;
      this.history.push(depo);
    
    } else { 
      console.log("Invalid input. Please enter a positive number");
    }
  }
//O(1)
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      console.log(`${this.ownerName} withdrew $${amount}`);
      const withd = `Withdrew $${amount}`;
      this.history.push(withd);
    
    } else { console.log("Insufficient balance") }
  }
// O(1)
  transferTo(anotherAccount, amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      anotherAccount.balance += amount;
      console.log(`${this.ownerName} transferred $${amount} to ${anotherAccount.ownerName}`);
      const trans = `Transferred $${amount} to ${anotherAccount.ownerName}`;
      this.history.push(trans);
    
    } else {
      console.log("Transfer failed: Insufficient balance");
    }
  }
//O(1)
  getSummary() {
    return `${this.ownerName}'s balance is $${this.balance}`;
  }
// O(1) -- When iterating through history array then it will be O(n)
  printHistory() {
    return this.history;
  }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300);

acc1.deposit(300)
acc2.deposit(200)

console.log(acc1.getSummary())
console.log(acc2.getSummary())

acc1.withdraw(100)
acc2.withdraw(300)

acc1.transferTo(acc2, 300)

console.log(acc1.printHistory())
console.log(acc2.printHistory())

console.log(acc1.getSummary())
console.log(acc2.getSummary())