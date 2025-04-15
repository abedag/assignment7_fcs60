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

