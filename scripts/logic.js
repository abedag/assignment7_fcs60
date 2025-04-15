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



class BankAccount {
  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.history = [];
  }

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

  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      console.log(`${this.ownerName} withdrew $${amount}`);
      const withd = `Withdrew $${amount}`;
      this.history.push(withd);
    
    } else { console.log("Insufficient balance") }
  }

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

  getSummary() {
    return `${this.ownerName}'s balance is $${this.balance}`;
  }

  printHistory() {
    return this.history;
  }
}

