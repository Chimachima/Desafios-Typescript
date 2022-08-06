// Como podemos rodar isso em um arquivo .ts sem causar erros? 


//Declaração de tipos na declaração do objeto
let employee: {code: number, name: string} = {
    code: 10,
    name: "John"
};


//Com Interface
interface EmployeeInterface{
    code: number;
    name: string;
}

let employee1: EmployeeInterface = {
    code: 10,
    name: "John"
}

let employee2={} as EmployeeInterface
employee2.code = 1020;
employee2.name = "John"

console.log(employee2.code);
