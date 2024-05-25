// Define Employee type
type Employee  = {
    name: string,
    department: string,
    role: string,
}
// Create employee data
let employee: Employee = {
    name: "Azka",
    department: "IT",
    role: "Developer",

};
// print Information
console.log(employee);
console.log(employee.name,employee.department,employee.role);
//Include an optional nested object named contact to hold phone and email information (if 
//provided).
type contact = {
    phone: Number;
    email: string;
}
type Employee2 = {
    name: string,
    department: string,
    role: string,
    contact?: contact,
};
let employee2: Employee2 = {
    name: "Azka",
    department: "IT",
    role: "Developer",
    contact: {
        phone: 812345678,
        email: "azka@gmail.com",
    }
};
console.log(employee2);
console.log(employee2.contact?.phone);
type Role = "Doctor" | "Engineer" | "Teacher";
type Emp = {
    name: string,
    department: string,
    role: Role,

}
let emp: Emp = {
    name: "Hateen",
    department: "Heart Specialist",
    role: "Doctor",
};
let emp2: Emp = {
    name: "Ahmad",
    department: "Chemical Enigineer",
    role: "Engineer",
};
let emp3: Emp = {
    name: "Sumera Mughees",
    department: "Senior",
    role: "Teacher",
};
console.log(emp);
console.log(emp2);
console.log(emp3);
