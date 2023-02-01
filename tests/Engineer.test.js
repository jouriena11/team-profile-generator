const Engineer = require('../lib/Engineer');

describe("Engineer", ()=>{
    describe("manager details", ()=>{
        it("return a manager's name, id, and email", ()=>{
            const engineer = new Engineer('Moe', 3, 'engineer@gmail.com')
            expect(engineer.name).toBe('Moe');
            expect(engineer.getName()).toBe('Moe');
            expect(engineer.id).toBe(3);
            expect(engineer.getId()).toBe('ID: 3');
            expect(engineer.email).toBe('engineer@gmail.com');
            expect(engineer.getEmail()).toBe('Email: engineer@gmail.com');
        }
        )
    })
    
    describe("getRole and standard employee questions", ()=>{
        const role = 'Engineer';
        const engineer = new Engineer('Moe', 3, 'engineer@gmail.com', role);
        it("returns engineer role", () => {
            expect(engineer.getRole()).toBe('Engineer');
        });
        it("return employee questions and address the employee's role in the questions in lowercase", ()=>{
            for (let i = 0; i < engineer.getQuestions().length; i++) {
                expect(engineer.getQuestions()[i].message).toContain('engineer');
            }
        })
    })

    describe("engineer questions to include asking for GitHub username and neither asking for an office number nor a school name", ()=>{
        const engineer = new Engineer('Moe', 3, 'engineer@gmail.com');
        it("include a question that asks for a GitHub username", ()=>{
            expect(engineer.getQuestions().findIndex((item)=>{return item.message.includes('GitHub')}) !== -1).toBe(true)
        })
        it("exclude a question that asks for an office number", ()=>{
            expect(engineer.getQuestions().findIndex((item)=>{return item.message.includes('office number')}) === -1).toBe(true)
        })
        it("exclude a question that asks for a school name", ()=>{
            expect(engineer.getQuestions().findIndex((item)=>{return item.message.includes('school')}) === -1).toBe(true)
        })
    })
})