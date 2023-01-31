const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("employee details", ()=>{
        it("return an employee name, id, and email", ()=>{
            const employee = new Employee("John", 1, "p.teeraprasert@gmail.com");
            expect(employee.name).toBe("John");
            expect(employee.getName()).toBe("John")
            expect(employee.id).toBe(1);
            expect(employee.getId()).toBe("ID: 1");
            expect(employee.email).toBe("p.teeraprasert@gmail.com");
            expect(employee.getEmail()).toBe("Email: p.teeraprasert@gmail.com");
        })
    })
    describe("getRole and standard employee questions", ()=>{
            const role = 'employee'
            const employee = new Employee("John", 1, "p.teeraprasert@gmail.com", role);

        it("return employee role", ()=>{
            expect(employee.getRole(role)).toBe('employee');
        });
        
        it("return employee questions and address the employee's role in the questions", ()=>{
            for (var i = 0; i < employee.getQuestions().length; i++) {
                expect(employee.getQuestions(role)[i].message).toContain('employee');
            }
        })
    })
});
