import { medicos, enfermeiros, tecnicosEnfermagem } from "./dados.js";
const form = document.querySelector(".cadastro-form");
const tipo = form.dataset.tipo;

switch (tipo) {
    case "medico":
    case "enfermeiro":
    case "tec-enfermagem":
        form.addEventListener("submit", (ev) => {
            ev.preventDefault();
        
            const nome = document.getElementById("nome").value;
            const dtNascimento = document.getElementById("dtNascimento").value;
            const endereco = document.getElementById("endereco").value;
            const bairro = document.getElementById("bairro").value;
            const nacionalidade = document.getElementById("nacionalidade").value;
            const telefone = document.getElementById("telefone").value;
            const genero = document.getElementById("genero").value;
            const especialidade = document.getElementById("especialidade").value;
        
            if (!nome || !dtNascimento || !endereco || !bairro || !nacionalidade || !telefone || !genero || !especialidade) {
                alert("Preencha todos os campos.");
                return
            }

            const novoCadastro = {
                nome,
                dtNascimento,
                endereco,
                bairro,
                nacionalidade,
                telefone,
                genero,
                especialidade
            }

            if (tipo === "medico") {
                medicos.push(novoCadastro);
                console.log(medicos);
            } else if (tipo === "enfermeiro") {
                enfermeiros.push(novoCadastro);
                console.log(enfermeiros);
            } else if (tipo === "tec-enfermagem") {
                tecnicosEnfermagem.push(novoCadastro);
                console.log(tecnicosEnfermagem);
            } else {
                console.log("Cadastro não reconhecido")
            }

            form.reset();
        });
        break;
    case "recepcionista":
        form.addEventListener("submit", (ev) => {
            ev.preventDefault();
        
            const nome = document.getElementById("nome").value;
            const dtNascimento = document.getElementById("dtNascimento").value;
            const endereco = document.getElementById("endereco").value;
            const bairro = document.getElementById("bairro").value;
            const nacionalidade = document.getElementById("nacionalidade").value;
            const telefone = document.getElementById("telefone").value;
            const genero = document.getElementById("genero").value;
        
            if (!nome || !dtNascimento || !endereco || !bairro || !nacionalidade || !telefone || !genero) {
                alert("Preencha todos os campos.");
                return
            }

            const novoCadastro = {
                nome,
                dtNascimento,
                endereco,
                bairro,
                nacionalidade,
                telefone,
                genero
            };

            console.log(novoCadastro);
            form.reset();
        });
        break;
    case "paciente":
        form.addEventListener("submit", (ev) => {
            ev.preventDefault();
        
            const nome = document.getElementById("nome").value;
            const dtNascimento = document.getElementById("dtNascimento").value;
            const endereco = document.getElementById("endereco").value;
            const bairro = document.getElementById("bairro").value;
            const cidade = document.getElementById("cidade").value;
            const telefone = document.getElementById("telefone").value;
            const genero = document.getElementById("genero").value;
            const cpf = document.getElementById("cpf").value;
            const email = document.getElementById("email").value;
        
            if (!nome || !dtNascimento || !endereco || !bairro || !telefone || !genero || !cidade || !cpf || !email) {
                alert("Preencha todos os campos.");
                return
            }

            const novoCadastro = {
                nome,
                dtNascimento,
                endereco,
                bairro,
                cidade,
                telefone,
                genero,
                cpf,
                email,
            };

            console.log(novoCadastro);
            form.reset();
        });
        break;
}
