const Manager = require('../lib/Manager');

describe("Manager", () => {
    
    describe("manager details", ()=>{
        it("return a manager name, id, and email", ()=>{
            const manager = new Manager("Joe", 2, "manager@gmail.com");
            expect(manager.name).toBe("Joe");
            expect(manager.getName()).toBe("Joe")
            expect(manager.id).toBe(2);
            expect(manager.getId()).toBe("ID: 2");
            expect(manager.email).toBe("manager@gmail.com");
            expect(manager.getEmail()).toBe("Email: manager@gmail.com");
        })
    })
    
    describe("getRole and standard employee questions", ()=>{
            const role = 'Team Manager'
            const manager = new Manager("Joe", 2, "manager@gmail.com", role);

        it("return team manager role", ()=>{
            expect(manager.getRole(role)).toBe('Team Manager');
        });
        
        it("return employee questions and address the employee's role in the questions in lowercase", ()=>{
            for (let i = 0; i < manager.getQuestions().length; i++) {
                expect(manager.getQuestions(role)[i].message).toContain('team manager');
            }
        })
    })
    
    describe("manager questions to include asking for an office number and neither asking for a GitHub username or a school name", ()=>{
        const manager = new Manager("Joe", 2, "manager@gmail.com");
        
        it("include a question that asks for the manager's office number", ()=>{
            expect(manager.getQuestions().findIndex((item)=>{return item.message.includes('office number')}) !== -1).toBe(true) 
        });

        it("exclude a question that asks for a GitHub username", ()=>{
            expect(manager.getQuestions().findIndex((item)=>{return item.message.includes('GitHub')}) === -1).toBe(true)
        })

        it("exclude a question that asks for a school name", ()=>{
            expect(manager.getQuestions().findIndex((item)=>{return item.message.includes('school')}) === -1).toBe(true)
        });
    })
});