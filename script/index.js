import { consultas } from "./dados.js";

const lista = document.querySelector(".consultas-list");
const filterConsulta = document.querySelector("#btn-consultas")

filterConsulta.addEventListener("click", () => {

    consultas.forEach(consulta => {
        const li = document.createElement("li");
        li.classList.add("consultas-list-item")
    
        const dataHorario = document.createElement("span");
        const nomePaciente = document.createElement("span");
        const nomeMedico = document.createElement("span");
        const btnEditar = document.createElement("button");
        const btnCancelar = document.createElement("button");
        const divAcoes = document.createElement("div");
    
        dataHorario.innerHTML = `${consulta.dataConsulta}<br>${consulta.horarioConsulta}`;
        nomePaciente.textContent = `${consulta.nomePaciente}`;
        nomeMedico.innerHTML = `${consulta.nomeMedico}<br>${consulta.especialidade}`;
    
        btnEditar.classList.add("btn-editar");
        btnEditar.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
    
        btnCancelar.classList.add("btn-cancelar");
        btnCancelar.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    
        divAcoes.classList.add("acoes");
        divAcoes.append(btnEditar, btnCancelar);
    
        li.append(dataHorario, nomePaciente, nomeMedico, divAcoes)
    
        lista.appendChild(li)
        
    });
})
