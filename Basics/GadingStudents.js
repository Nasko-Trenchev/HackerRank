function gradingStudents(grades) {


   return grades.map((grade) => {
        if (grade < 38 || (grade) % 5 < 3) {
            return grade
        }
        else {
            return grade + (5 - (grade % 5))
        }

    })

}

console.log(gradingStudents([4, 73, 67, 38, 33]))