const students = [
  {
    nome: 'João da Silva',
    matricula: '2023001',
    plano: 'Básico',
    vencimento: '12/04',
    peso: '92kg',
    altura: '1,84m',
    telefone: '8692820201',
    foto: '../assets/user-placeholder.png',
  },
  {
    nome: 'Maria Oliveira',
    matricula: '2023002',
    plano: 'Avançado',
    vencimento: '20/05',
    peso: '68kg',
    altura: '1,65m',
    telefone: '8692820202',
    foto: '../assets/user-placeholder.png',
  }
];

const studentsGrid = document.querySelector('.students-grid');
const openBtn = document.querySelector('.btn-white');

function getAlunos() {
  let alunos = JSON.parse(localStorage.getItem('alunos'));
  if (!alunos) {
    alunos = [
      {
        nome: 'João da Silva',
        matricula: '2023001',
        plano: 'Básico',
        vencimento: '12/04',
        peso: '92kg',
        altura: '1,84m',
        telefone: '8692820201',
        foto: '../assets/user-placeholder.png',
      },
      {
        nome: 'Maria Oliveira',
        matricula: '2023002',
        plano: 'Avançado',
        vencimento: '20/05',
        peso: '68kg',
        altura: '1,65m',
        telefone: '8692820202',
        foto: '../assets/user-placeholder.png',
      }
    ];
    localStorage.setItem('alunos', JSON.stringify(alunos));
  }
  return alunos;
}

function renderStudents() {
  const students = getAlunos();
  studentsGrid.innerHTML = '';
  students.forEach((aluno, idx) => {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = `
      <img class="student-photo" src="${aluno.foto}" alt="Foto do aluno">
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
        </div>
      </div>
    `;
    card.querySelector('.delete').addEventListener('click', function() {
      let alunos = getAlunos();
      alunos.splice(idx, 1);
      localStorage.setItem('alunos', JSON.stringify(alunos));
      renderStudents();
    });
    studentsGrid.appendChild(card);
  });
}

openBtn.addEventListener('click', function() {
  window.location.href = 'cadastro-aluno.html';
});

renderStudents(); 