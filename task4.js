 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 1, starting: 29000, increment: 4000 },
];
        


function totalSalarybyCompany(employee) {
    let totalSalary = 0; 
    for (const person of employee) {
        totalSalary += (person.starting + (person.experience * person.increment)); 
    }
    return totalSalary; 
}

console.log(totalSalarybyCompany(employees));