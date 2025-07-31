import { consultas, medicos, enfermeiros, tecnicosEnfermagem, pacientes, tituloPacientes, tituloConsultas, tituloMedicos, tituloEnfermeiros, tituloTecEnfs, navItems, permissionNav } from "./dados.js"; 

const nav = document.querySelector(".main-nav-list");
const lista = document.querySelector(".listagem-list");
const listagemTitle = document.querySelector(".listagem-title");

function renderHeader(titulos) {
    const header = document.querySelector(".listagem-header");
    header.innerHTML = "";
    
    Object.values(titulos).forEach(titulo => {
        const li = document.createElement("li");
        li.textContent = titulo;
        header.appendChild(li)
    });

    const liAcoes = document.createElement("li");
    liAcoes.textContent = "Ações";
    header.appendChild(liAcoes);
}

function renderList(renderFn) {
    lista.classList.add("fade-out");
    setTimeout(() => {
        lista.innerHTML = "";
        renderFn();
        lista.classList.remove("fade-out");
        lista.classList.add("fade-in");
        setTimeout(() => {
            lista.classList.remove('fade-in');
        }, 400);
    }, 400)
}

function renderPacientes() {{
    renderHeader(tituloPacientes[0])
    renderList(() => {
        listagemTitle.textContent = "Pacientes";
        pacientes.forEach(paciente => {
            const li = document.createElement("li");
            li.classList.add("listagem-list-item")
        
            const nome = document.createElement("span");
            const cpf = document.createElement("span");
            const dataNasc = document.createElement("span");
            const sexo = document.createElement("span");
            const btnEditar = document.createElement("button");
            const btnDeletar = document.createElement("button");
            const divAcoes = document.createElement("div");
        
            nome.textContent = `${paciente.nome}`;
            cpf.textContent = `${paciente.cpf}`
            dataNasc.textContent = `${paciente.nascimento}`
            sexo.textContent = `${paciente.sexo}`
            
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
        
            btnDeletar.classList.add("btn-cancelar");
            btnDeletar.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar, btnDeletar);
        
            li.append(nome, cpf, dataNasc, sexo, divAcoes)
        
            lista.appendChild(li)
            
        });
    })
}}

function renderMedicos() {
    renderHeader(tituloMedicos[0])
    renderList(() => {
        listagemTitle.textContent = "Médicos";
        medicos.forEach(medico => {
            const li = document.createElement("li");
            li.classList.add("listagem-list-item")
        
            const nomeMedico = document.createElement("span");
            const especialidade = document.createElement("span");
            const crm = document.createElement("span");
            const btnEditar = document.createElement("button");
            const btnDeletar = document.createElement("button");
            const divAcoes = document.createElement("div");
        
            nomeMedico.textContent = `${medico.nomeMedico}`;
            especialidade.textContent = `${medico.especialidade}`
            crm.textContent = `${medico.crm}`
            
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
        
            btnDeletar.classList.add("btn-cancelar");
            btnDeletar.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar, btnDeletar);
        
            li.append(nomeMedico, especialidade, crm, divAcoes)
        
            lista.appendChild(li)
            
        });
    })
}

function renderConsultas() {
    renderHeader(tituloConsultas[0])
    renderList(() => {
        listagemTitle.textContent = "Consultas";
        consultas.forEach(consulta => {
            const li = document.createElement("li");
            li.classList.add("listagem-list-item")
        
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
}

function renderEnfermeiros() {
    renderHeader(tituloEnfermeiros[0])
    renderList(() => {
        listagemTitle.textContent = "Enfermeiros";
        enfermeiros.forEach(enfermeiro => {
            const li = document.createElement("li");
            li.classList.add("listagem-list-item")
            
            const nomeEnfermeiro = document.createElement("span");
            const coren = document.createElement("span");
            const turno = document.createElement("span");
            const btnEditar = document.createElement("button");
            const btnDeletar = document.createElement("button");
            const divAcoes = document.createElement("div");
            
            nomeEnfermeiro.textContent = `${enfermeiro.nome}`;
            coren.textContent = `${enfermeiro.coren}`
            turno.textContent = `${enfermeiro.turno}`
                
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
            
            btnDeletar.classList.add("btn-cancelar");
            btnDeletar.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar, btnDeletar);
            
            li.append(nomeEnfermeiro, coren, turno, divAcoes)
            
            lista.appendChild(li)
                
        });
    })
}

function renderTecEnfermeiros() {
    renderHeader(tituloTecEnfs[0])
    renderList(() => {
        listagemTitle.textContent = "Téc. de Enfermagem";
        tecnicosEnfermagem.forEach(tecEnf => {
            const li = document.createElement("li");
            li.classList.add("listagem-list-item")
                
            const nome = document.createElement("span");
            const coren = document.createElement("coren");
            const turno = document.createElement("turno");
            const btnEditar = document.createElement("button");
            const btnDeletar = document.createElement("button");
            const divAcoes = document.createElement("div");
                
            nome.textContent = `${tecEnf.nome}`;
            coren.textContent = `${tecEnf.coren}`
            turno.textContent = `${tecEnf.turno}`
                    
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
                
            btnDeletar.classList.add("btn-cancelar");
            btnDeletar.innerHTML = `<i class="fa-solid fa-trash"></i>`;
                
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar, btnDeletar);
                
            li.append(nome, coren, turno, divAcoes)
                
            lista.appendChild(li)
                
        });
    })
}

const userType = "admin";

function renderNav() {
    nav.innerHTML = "";

    const permittedItems = navItems.filter(item => permissionNav[userType].includes(item.id));
    permittedItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("main-nav-item");

        const button = document.createElement("button");
        button.type = "button";
        button.id = item.id;

        const icon = document.createElement("i");
        icon.className = `fa-solid ${item.icon}`;

        button.appendChild(icon);

        const span = document.createElement("span");
        span.innerHTML = item.label;

        const strong = document.createElement("strong");
        strong.textContent = item.count;

        li.append(button, span, strong);

        nav.appendChild(li);

        switch (item.id) {
            case "btn-pacientes":
                li.addEventListener("click", renderPacientes)
                break;
            case "btn-doctors":
                li.addEventListener("click", renderMedicos)
                break;
            case "btn-consultas":
                li.addEventListener("click", renderConsultas)
                break;
            case "btn-enfermeiros":
                li.addEventListener("click", renderEnfermeiros)
                break;
            case "btn-tecEnf":
                li.addEventListener("click", renderTecEnfermeiros)
                break;
            case "btn-users":
                break;
        }
    });
}

renderNav();
renderPacientes();