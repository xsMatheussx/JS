document.addEventListener("DOMContentLoaded", carregarContatos);

const formulario = document.getElementById("form-group");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); //impedindo o refresh da página
  adicionarContato();
});

function adicionarContato() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  if (nome === "" || telefone === "" || email === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  const contato = { nome, telefone, email };

  salvarContato(contato);
  limparCampos();
  carregarContatos();
}

function salvarContato(contato) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.push(contato);
  localStorage.setItem("contatos", JSON.stringify(contatos));
}

function carregarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.forEach((contato, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <p><strong>Nome:</strong> ${contato.nome}</p>
        <p><strong>Telefone:</strong> ${contato.telefone}</p>
        <p><strong>E-mail:</strong> ${contato.email}</p>
        <button type="button" class="delete" onclick="removerContato(${index})">X</button>
        <button type="button" class="edit" onclick="EditarContato(${index})">Editar</button>
    `;

    lista.appendChild(li);
  });
}

function removerContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(index, 1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  carregarContatos();
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
}

function EditarContato(index) {
  //recupera os contatos do local storage
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  //recupera o contato pelo indice
  let contato = contatos[index];

  //trasforma em string
  let nome = JSON.stringify(contato);
  let telefone = JSON.stringify(contato);
  let email = JSON.stringify(contato);

  //preenche o input
  document.getElementById("nome").value = contato.nome; //(contato.nome) busca a propriedade do objeto, que dever ser uma String.
  document.getElementById("telefone").value = contato.telefone;
  document.getElementById("email").value = contato.email;

  //remover item
  contatos.splice(index, 1);

  //seta o valor para o local storage
  localStorage.setItem("contatos", JSON.stringify(contatos));

  //adiciona o contato editado na lista visual abaixo do botão adicionar
  carregarContatos();
}
