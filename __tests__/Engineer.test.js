
const Engineer = require("../lib/Engineer");

test("GitHub will return github username", () => {
    const testGitHub = "taholton748";
    const engineer = new Engineer("Tyler", 24, "taholton748@yahoo.com", testGitHub);
    expect(engineer.github).toBe(testGitHub);
})