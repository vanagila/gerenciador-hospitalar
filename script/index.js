import { consultas, medicos, enfermeiros, tecnicosEnfermagem, pacientes, tituloPacientes, tituloConsultas, tituloMedicos, tituloEnfermeiros, tituloTecEnfs, navItems, permissoesNav } from "./dados.js"; 

const nav = document.querySelector(".main-nav-list");
const lista = document.querySelector(".listagem-list");
const listagemTitle = document.querySelector(".listagem-title");

const renderHeader = (titulos) => {
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

const renderList = (renderFn) => {
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

const renderPacientes = () => {{
    renderHeader(tituloPacientes[0])
    renderList(() => {
        listagemTitle.textContent = "Pacientes";
        pacientes.forEach((paciente, index) => {
            const li = document.createElement("li");
            li.classList.add("listagem-list-item")
        
            const nome = document.createElement("span");
            const cpf = document.createElement("span");
            const dataNasc = document.createElement("span");
            const sexo = document.createElement("span");
            const btnEditar = document.createElement("button");
            const divAcoes = document.createElement("div");
        
            nome.textContent = `${paciente.nome}`;
            cpf.textContent = `${paciente.cpf}`
            dataNasc.textContent = `${paciente.nascimento}`
            sexo.textContent = `${paciente.sexo}`
            
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-plus"></i>`;
            btnEditar.setAttribute("data-index", index);

            btnEditar.addEventListener("click", (e) => {
                e.stopPropagation();
                mostrarModalPaciente(pacientes[index]);
                const modal = document.getElementById("modal-overlay");
                if (modal) {
                    modal.style.display = "flex";
                }
            });
        
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar);
        
            li.append(nome, cpf, dataNasc, sexo, divAcoes)
        
            lista.appendChild(li)
            
        });
    })
}}

const renderMedicos = () => {
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
            const divAcoes = document.createElement("div");
        
            nomeMedico.textContent = `${medico.nome}`;
            especialidade.textContent = `${medico.especialidade}`
            crm.textContent = `${medico.crm}`
            
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar);
        
            li.append(nomeMedico, especialidade, crm, divAcoes)
        
            lista.appendChild(li)
            
        });
    })
}

const renderConsultas = () => {
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
            const divAcoes = document.createElement("div");
        
            dataHorario.innerHTML = `${consulta.dataConsulta}<br>${consulta.horarioConsulta}`;
            nomePaciente.textContent = `${consulta.nomePaciente}`;
            nomeMedico.innerHTML = `${consulta.nomeMedico}<br>${consulta.especialidade}`;
        
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar);
        
            li.append(dataHorario, nomePaciente, nomeMedico, divAcoes)
        
            lista.appendChild(li)
            
        });
    })
}

const renderEnfermeiros = () => {
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
            const divAcoes = document.createElement("div");
            
            nomeEnfermeiro.textContent = `${enfermeiro.nome}`;
            coren.textContent = `${enfermeiro.coren}`
            turno.textContent = `${enfermeiro.turno}`
                
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-plus"></i>`;
            
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar);
            
            li.append(nomeEnfermeiro, coren, turno, divAcoes)
            
            lista.appendChild(li)
                
        });
    })
}

const renderTecEnfermeiros = () => {
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
            const divAcoes = document.createElement("div");
                
            nome.textContent = `${tecEnf.nome}`;
            coren.textContent = `${tecEnf.coren}`
            turno.textContent = `${tecEnf.turno}`
                    
            btnEditar.classList.add("btn-editar");
            btnEditar.innerHTML = `<i class="fa-solid fa-plus"></i>`;
                
            divAcoes.classList.add("acoes");
            divAcoes.append(btnEditar);
                
            li.append(nome, coren, turno, divAcoes)
                
            lista.appendChild(li)
                
        });
    })
}

const userType = "admin";

const renderNav = () => {
    nav.innerHTML = "";

    const itensPermitidos = navItems.filter(item => permissoesNav[userType].includes(item.id));
    itensPermitidos.forEach(item => {
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

const mostrarModalPaciente = (paciente) => {
    document.querySelector("#patient-modal h3").textContent = paciente.nome;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(1) p:nth-child(2)").innerHTML = `<strong>Nome Completo:</strong> ${paciente.nome}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(1) p:nth-child(3)").innerHTML = `<strong>CPF:</strong> ${paciente.cpf}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(1) p:nth-child(4)").innerHTML = `<strong>Data de Nascimento:</strong> ${paciente.nascimento}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(1) p:nth-child(5)").innerHTML = `<strong>Gênero:</strong> ${paciente.sexo}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(2) p:nth-child(2)").innerHTML = `<strong>Telefone:</strong> ${paciente.telefone || ""}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(2) p:nth-child(3)").innerHTML = `<strong>Email:</strong> ${paciente.email || ""}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(3) p:nth-child(2)").innerHTML = `<strong>Rua:</strong> ${paciente.rua || ""}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(3) p:nth-child(3)").innerHTML = `<strong>Cidade:</strong> ${paciente.cidade || ""}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(3) p:nth-child(4)").innerHTML = `<strong>Estado:</strong> ${paciente.estado || ""}`;
    document.querySelector("#patient-modal .modal-paciente-section:nth-child(4) .modal-paciente-notes").textContent = paciente.observacoes || "";
}

renderNav();
renderPacientes();