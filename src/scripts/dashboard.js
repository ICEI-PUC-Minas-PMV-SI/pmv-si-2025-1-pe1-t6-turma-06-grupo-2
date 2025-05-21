const usuarioAtual = Auth.getUsuarioAtual();
if (!usuarioAtual) {
  window.location.href = 'login.html';
}

const studentsGrid = document.querySelector('.students-grid');
const openBtn = document.querySelector('.btn-white');
const searchInput = document.querySelector('.search-input');
const logoutBtn = document.querySelector('.logout-btn');

document.querySelector('.dashboard-title').textContent = usuarioAtual.empresa;

function renderStudents(alunos = usuarioAtual.alunos || []) {
  studentsGrid.innerHTML = '';

  if (alunos.length === 0) {
    studentsGrid.innerHTML = `
      <div class="no-students">
        <span class="material-icons">group_off</span>
        <p>Nenhum aluno cadastrado</p>
      </div>
    `;
    return;
  }

  alunos.forEach((aluno, idx) => {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = `
      <img class="student-photo" src="${aluno.foto || '../assets/user-placeholder.png'}" alt="Foto do aluno">
      <div class="student-info">
        <div class="student-header">
          <span class="student-name">${aluno.nome}</span>
          <div class="student-actions">
            <span class="material-icons edit" data-idx="${idx}">edit</span>
            <span class="material-icons delete" data-idx="${idx}">delete</span>
          </div>
        </div>
        <div class="student-plan">Plano: <b>${aluno.plano}</b></div>
        <div class="student-details">
          <span>Altura <b>${aluno.altura}</b></span>
          <span>Vencimento: <b>${aluno.vencimento}</b></span>
          <span>Peso atual <b>${aluno.peso}</b></span>
          <span>Telefone <b>${aluno.telefone}</b></span>
        </div>
      </div>
    `;

    card.querySelector('.delete').addEventListener('click', function() {
      if (confirm(`Tem certeza que deseja excluir o aluno ${aluno.nome}?`)) {
        usuarioAtual.alunos.splice(idx, 1);
        Auth.atualizarUsuarioAtual(usuarioAtual);
        renderStudents();
      }
    });

    card.querySelector('.edit').addEventListener('click', function() {
      window.location.href = `cadastro-aluno.html?idx=${idx}`;
    });

    studentsGrid.appendChild(card);
  });
}

searchInput.addEventListener('input', function(e) {
  const termo = e.target.value.toLowerCase().trim();
  const alunos = usuarioAtual.alunos || [];

  const filtrados = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(termo) ||
    aluno.telefone.toLowerCase().includes(termo)
  );

  renderStudents(filtrados);
});

logoutBtn.addEventListener('click', function() {
  Auth.logout();
  window.location.href = 'login.html';
});

openBtn.addEventListener('click', function() {
  window.location.href = 'cadastro-aluno.html';
});

renderStudents();
