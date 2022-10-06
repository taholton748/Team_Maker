const Manager = require('../lib/Manager');

test("Returns office number given office number", () => {
    const testOfficeNumber = 204;
    const manager = new Manager("Tyler", 24, "taholton748@yahoo.com", testOfficeNumber);
    expect(manager.officeNumber).toBe(testOfficeNumber);
})