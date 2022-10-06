const Employee = require("../lib/Employee");

test("Name comes back given a name", () => {
    const name = "Tyler";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("ID comes back given employee ID", () => {
    const id = 24;
    const employee = new Employee("Tyler", id);
    expect(employee.id).toBe(id);
})

test("E-mail comes back given e-mail address", () => {
    const email = "taholton748@yahoo.com";
    const employee = new Employee("Tyler", 24, email);
    expect(employee.email).toBe(email);
})