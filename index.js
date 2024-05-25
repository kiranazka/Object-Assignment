var _a;
// Create employee data
var employee = {
    name: "Azka",
    department: "IT",
    role: "Developer",
};
// print Information
console.log(employee);
console.log(employee.name, employee.department, employee.role);
var employee2 = {
    name: "Azka",
    department: "IT",
    role: "Developer",
    contact: {
        phone: 812345678,
        email: "azka@gmail.com",
    }
};
console.log(employee2);
console.log((_a = employee2.contact) === null || _a === void 0 ? void 0 : _a.phone);
var emp = {
    name: "Hateen",
    department: "Heart Specialist",
    role: "Doctor",
};
var emp2 = {
    name: "Ahmad",
    department: "Chemical Enigineer",
    role: "Engineer",
};
var emp3 = {
    name: "Sumera Mughees",
    department: "Senior",
    role: "Teacher",
};
console.log(emp);
console.log(emp2);
console.log(emp3);
