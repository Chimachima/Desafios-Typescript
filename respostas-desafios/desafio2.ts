// Como podemos melhorar o esse código usando TS? 


enum Profissao{
    ATRIZ,
    PADEIRO
    
}

interface PessoaInterface{
    nome: string,
    idade: number,
    profissao: Profissao
}


let pessoa1 = {} as PessoaInterface;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.ATRIZ

let pessoa2 = {}  as PessoaInterface;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.PADEIRO;

let pessoa3: PessoaInterface = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.PADEIRO
};

let pessoa4: PessoaInterface = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.PADEIRO
}