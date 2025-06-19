import { medicos, enfermeiros } from "./dados.js";
const form = document.querySelector(".cadastro-form");
const tipo = form.dataset.tipo;
console.log(tipo)

switch (tipo) {
    case "medico":
    case "enfermeiro":
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
                alert("Preencha todos os campos.")
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
                console.log(medicos)
            }
            else {
                enfermeiros.push(novoCadastro);
                console.log(enfermeiros)
            }
            
            form.reset();
        });
        break;
    default:
        console.log("outro tipo");
}
