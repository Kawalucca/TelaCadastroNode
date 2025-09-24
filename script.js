
// Carregar cadastros do localStorage ao iniciar
let cadastros = [];
if (localStorage.getItem('cadastros')) {
    try {
        cadastros = JSON.parse(localStorage.getItem('cadastros'));
    } catch (e) {
        cadastros = [];
    }
}

// Salvar cadastros no localStorage
function salvarCadastros() {
    localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

function Registrar() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const email = document.getElementById("email").value;

    if (nome && senha && email) {
        cadastros.push({ nome, senha, email });
        salvarCadastros();
        renderCadastros();
        document.getElementById("nome").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function renderCadastros() {
    const lista = document.getElementById("cadastros");
    lista.innerHTML = "";
    cadastros.forEach((cadastro, index) => {
        const div = document.createElement("div");
        div.classList.add("cadastro");
          div.innerHTML = `
            <strong>Nome:</strong> ${cadastro.nome} <br>
            <strong>Email:</strong> ${cadastro.email} <br>
            <strong>Senha:</strong> 
            <span style="display:inline-flex; align-items:center;">
                <span id="senha-cadastro-${index}" style="margin-right:4px;">****</span>
                <button type="button" onclick="toggleSenhaCadastro(${index})" style="background:transparent; border:none; color:#888; padding:0; margin:0; font-size:18px; cursor:pointer; vertical-align:middle;">👁‍🗨</button>
            </span>
            <br>
            <button onclick="deletarCadastro(${index})">Excluir</button>
            <hr>
        `;
        lista.appendChild(div);
    });
}

function toggleSenhaCadastro(index) {
    const span = document.getElementById(`senha-cadastro-${index}`);
    if (span.textContent === '****') {
        span.textContent = cadastros[index].senha;
    } else {
        span.textContent = '****';
    }
}
function deletarCadastro(index) {
    cadastros.splice(index, 1);
    salvarCadastros();
    renderCadastros();
}

// Renderizar cadastros ao carregar a página
window.onload = renderCadastros;