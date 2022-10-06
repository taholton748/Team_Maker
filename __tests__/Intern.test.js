const Intern = require("../lib/Intern");

test("School comes back given school attending", () => {
    const testSchool = "UNC Chapel-Hill";
    const intern = new Intern("Tyler", 24, "taholton748@yahoo.com", testSchool);
    expect(intern.school).toBe(testSchool);
})