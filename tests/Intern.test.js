const Intern = require('../lib/Intern');

describe("Intern", ()=>{

    describe("Intern details", ()=>{
        it("return an intern's name, id, and email", ()=>{
            const intern = new Intern('Loe', 4, 'intern@gmail.com');
            expect(intern.name).toBe('Loe');
            expect(intern.getName()).toBe('Loe');
            expect(intern.id).toBe(4);
            expect(intern.getId()).toBe('ID: 4');
            expect(intern.email).toBe('intern@gmail.com');
            expect(intern.getEmail()).toBe('Email: intern@gmail.com');
        })
    })

    describe("getRole and standard employee questions", ()=>{
        const role = 'Intern'
        const intern = new Intern('Loe', 4, 'intern@gmail.com', role);
        it("returns intern role", ()=>{
            expect(intern.getRole()).toBe('intern');
        })
        it("return employee questions and address the intern role in the questions in lowercase", ()=>{
            for (let i = 0; i < intern.getQuestions().length; i++) {
                expect(intern.getQuestions()[i].message).toContain('intern');
            }
        })
    })

    describe("intern questions to include asking for school name but neither asking for an office number nor a GitHub username", ()=>{
        const intern = new Intern('Loe', 4, 'intern@gmail.com');
        it("include a question that asks for a school name", ()=>{
            expect(intern.getQuestions().findIndex((item)=>{return item.message.includes('school')}) !== -1).toBe(true);
        })
        it("exclude a question that asks for an office number", ()=>{
            expect(intern.getQuestions().findIndex((item)=>{return item.message.includes('office number')}) === -1).toBe(true);
        })
        it("exclude a question that asks for a GitHub username", ()=>{
            expect(intern.getQuestions().findIndex((item)=>{return item.message.includes('GitHub')}) === -1).toBe(true);
        })
    })
})