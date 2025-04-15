function generateReports(students) {
  return students.map(student => {
    const total = student.scores.reduce((sum, score) => sum + score ,0);
    const average = Math.round(total/student.scores.length);

  })
}

