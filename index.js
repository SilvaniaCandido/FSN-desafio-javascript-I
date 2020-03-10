// Base a ser utilizada

const alunosDaEscola = [
    { nome: "Henrique", notas: [], cursos: [], faltas: 5 },
    { nome: "Edson", notas: [], cursos: [], faltas: 2 },
    { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 },
    { nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0 },
    { nome: "Carlos", notas: [], cursos: [], faltas: 0 },
    { nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }
];

function adicionarAluno(nomeAluno) {

    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
      E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
      A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

    if (!(alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno) > -1)) {
        alunosDaEscola.push({ nome: nomeAluno, notas: [], cursos: [], faltas: 0 });
        console.log(`Novo Aluno: ${nomeAluno} incluido com sucesso!`);
    } else {
        console.log(`Aluno ${nomeAluno} cadastrado anteriormente. Verifique.`);
    };
};

function listarAlunos() {

    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável. */

    for (let i = 0; i < alunosDaEscola.length; i++) {
        console.log("-".repeat(30));
        console.log("Nome do Aluno: " + alunosDaEscola[i].nome);
        console.log("Notas: " + alunosDaEscola[i].notas);
        for (let x = 0; x < alunosDaEscola[i].cursos.length; x++) {
            console.log("Nome do Curso : " + alunosDaEscola[i].cursos[x].nomeDoCurso);
            var dataMatricula = new Date()
            var diaMatricula = alunosDaEscola[i].cursos[x].dataMatricula.getDate();
            var mesMatricula = alunosDaEscola[i].cursos[x].dataMatricula.getMonth();
            var anoMatricula = alunosDaEscola[i].cursos[x].dataMatricula.getFullYear();
            mesMatricula++;
            if (diaMatricula < 10) { diaMatricula = '0' + diaMatricula; };
            if (mesMatricula < 10) { mesMatricula = '0' + mesMatricula; };
            dataMatricula = diaMatricula + '/' + mesMatricula + '/' + anoMatricula;
            console.log("Data de Matricula: " + dataMatricula);
        }
        console.log("Faltas: " + alunosDaEscola[i].faltas);
    }
    console.log("=".repeat(30));
};


function buscarAluno(nomeAluno) {

    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno.
       Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. 
       E deverá devolver um aluno em seu retorno. */

    if (alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno) > -1) {
        console.log(`Nome ${nomeAluno} encontrado na lista de alunos. `);
        return alunosDaEscola.find(alunoDaEscola => alunoDaEscola.nome === nomeAluno);
    } else {
        console.log(`Nome ${nomeAluno} não encontrado na lista de alunos.`);
    }
};

function matricularAluno(nomeAluno, nomeCurso) {

    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
       Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, 
       e deverá armazenar a data atual no momento da matricula
       Lembre-se de exibir o feedback para o usuário. */

    if (alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno) > -1) {
        let i = alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno);
        if (alunosDaEscola[i].cursos.findIndex((curso) => curso.nomeDoCurso === nomeCurso) < 0) {
            let c = alunosDaEscola[i].cursos.findIndex((curso) => curso.nomeDoCurso === nomeCurso);
            alunosDaEscola[i].cursos.push({ nomeDoCurso: nomeCurso, dataMatricula: new Date() });

            console.log(`Curso ${nomeCurso} incluido para ${nomeAluno}`);
        } else {
            console.log(`Curso ${nomeCurso} já existe na lista de ${nomeAluno}`);
        };
    } else {
        console.log(`Ocorreu um erro. Verifique se ${nomeAluno} está cadastrado`);
    };
};

function aplicarFalta(nomeAluno) {

    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. 
     Você deverá incrementar uma falta ao aluno. 
     Você deverá dar um feedback ao concluir a tarefa. 
     Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.*/

    if (alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno) > -1) {
        let i = alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno);
        if (alunosDaEscola[i].cursos.findIndex((curso) => curso.nomeDoCurso) > -1) {
            alunosDaEscola[i].faltas++;
            console.log(`Falta aplicada para ${nomeAluno}`);
        } else {
            console.log(`${nomeAluno} não matriculado em um curso`)
        }
    };
};

function aplicarNota(nomeAluno, notaCurso) {

    /*
     Ao receber um aluno devidamente cadastrado em nossa lista.
     Você deverá adicionar uma nota ao aluno na sua lista de notas. 
     Você deverá dar um feedback ao concluir a tarefa. 
     Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.*/

    if (alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno) > -1) {
        let i = alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno);
        if (alunosDaEscola[i].cursos.findIndex((curso) => curso.nomeDoCurso) > -1) {
            alunosDaEscola[i].notas.push(notaCurso);
            console.log(`Nota aplicada para ${nomeAluno}`);
        } else {
            console.log(`${nomeAluno} não matriculado em um curso`);
        };
    };
};


function aprovarAluno(nomeAluno) {

    /* Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não.
    Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.*/

    if (alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno) > -1) {
        let i = alunosDaEscola.findIndex(alunoDaEscola => alunoDaEscola.nome === nomeAluno);
        if (alunosDaEscola[i].cursos.findIndex((curso) => curso.nomeDoCurso) > -1) {
            if (alunosDaEscola[i].faltas < 4) {
                if (alunosDaEscola[i].notas.length > -1) {
                    let totalNotas = 0;
                    for (let n = 0; n < alunosDaEscola[i].notas.length; n++) {
                        totalNotas = totalNotas + alunosDaEscola[i].notas[n];
                    }
                    if (totalNotas / alunosDaEscola[i].notas.length >= 7);
                    console.log(`${nomeAluno} está aprovado!`);
                } else {
                    console.log(`${nomeAluno} está reprovado!`);
                };
            } else {
                console.log(`${nomeAluno} está reprovado por falta`);
            }
        } else {
            console.log(`${nomeAluno} não matriculado em um curso`);
        }
    };
};

let nomeAluno = 'Elvis';
let nomeCurso = 'Data Science';
let notaCurso = 8.7;

adicionarAluno(nomeAluno);
listarAlunos();
listarAlunos();
console.log(buscarAluno(nomeAluno));
matricularAluno(nomeAluno, nomeCurso);
aplicarFalta(nomeAluno);
aplicarNota(nomeAluno, notaCurso);
aprovarAluno(nomeAluno);
