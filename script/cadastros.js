import { medicos } from "./dados.js";
const formCadastro = document.querySelector("#cadastro-form");

formCadastro.addEventListener("submit", (ev) => {
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

    const doctor = {
        nome,
        dtNascimento,
        endereco,
        bairro,
        nacionalidade,
        telefone,
        genero,
        especialidade
    }

    medicos.push(doctor);
    formCadastro.reset();
});