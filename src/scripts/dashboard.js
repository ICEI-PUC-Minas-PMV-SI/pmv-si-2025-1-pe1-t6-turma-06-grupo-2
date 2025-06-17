const usuarioAtual = Auth.getUsuarioAtual();
if (!usuarioAtual) {
  window.location.href = "login.html";
}

let adminEmpresa = null;
if (usuarioAtual.tipo === "funcionario") {
  const usuarios = Auth.getUsuarios();
  adminEmpresa = usuarios.find(
    (user) =>
      user.empresa === usuarioAtual.empresa &&
      user.funcionarios &&
      user.funcionarios.some((f) => f.email === usuarioAtual.email)
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const studentsGrid = document.querySelector(".students-grid");
  const openBtn = document.querySelector(".btn-white");
  const searchInput = document.querySelector(".search-input");
  const logoutBtn = document.querySelector(".logout-btn");
  const filterPlanBtn = document.querySelector(
    ".dashboard-actions .btn-outline:nth-child(3)"
  );
  const exportBtn = document.querySelector(".btn-outline:first-child");
  const navFuncionarios = document.querySelector('a[href="funcionarios.html"]');

  if (
    !studentsGrid ||
    !openBtn ||
    !searchInput ||
    !logoutBtn ||
    !filterPlanBtn
  ) {
    console.error("Elementos do DOM não encontrados");
    return;
  }

  if (usuarioAtual.tipo === "funcionario") {
    if (navFuncionarios) navFuncionarios.style.display = "none";
    if (exportBtn) exportBtn.style.display = "none";
  }

  let isFilteringByPlan = false;

  document.querySelector(".dashboard-title").textContent =
    "FitControl - " + usuarioAtual.empresa;

  function getAlunos() {
    if (usuarioAtual.tipo === "funcionario" && adminEmpresa) {
      return adminEmpresa.alunos || [];
    }
    return usuarioAtual.alunos || [];
  }

  function setAlunos(novosAlunos) {
    if (usuarioAtual.tipo === "funcionario" && adminEmpresa) {
      adminEmpresa.alunos = novosAlunos;
      const usuarios = Auth.getUsuarios();
      const idx = usuarios.findIndex((u) => u.email === adminEmpresa.email);
      if (idx !== -1) {
        usuarios[idx] = adminEmpresa;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      }
    } else {
      usuarioAtual.alunos = novosAlunos;
      Auth.atualizarUsuarioAtual(usuarioAtual);
    }
  }

  function renderStudents() {
    const alunos = getAlunos();
    studentsGrid.innerHTML = "";

    if (!alunos || alunos.length === 0) {
      studentsGrid.innerHTML = `
        <div class="no-students">
          <span class="material-icons">group_off</span>
          <p>Nenhum aluno cadastrado</p>
        </div>
      `;
      return;
    }

    alunos.forEach((aluno, idx) => {
      const card = document.createElement("div");
      card.className = "student-card";
      card.innerHTML = `
        <img class="student-photo" src="${
          aluno.foto || "../assets/user-placeholder.png"
        }" alt="Foto do aluno">
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

      card.querySelector(".delete").addEventListener("click", function () {
        if (confirm("Tem certeza que deseja excluir este aluno?")) {
          const alunosAtualizados = getAlunos();
          alunosAtualizados.splice(idx, 1);
          setAlunos(alunosAtualizados);
          renderStudents();
        }
      });

      card.querySelector(".edit").addEventListener("click", function () {
        window.location.href = `cadastro-aluno.html?edit=${idx}`;
      });

      studentsGrid.appendChild(card);
    });
  }

  function updateSearchPlaceholder() {
    searchInput.placeholder = isFilteringByPlan
      ? "Pesquisar por plano"
      : "Pesquisar por nome";
    searchInput.value = "";
    searchInput.classList.toggle("filtering-by-plan", isFilteringByPlan);
    filterPlanBtn.classList.toggle("active", isFilteringByPlan);
    searchInput.dispatchEvent(new Event("input"));
  }

  searchInput.addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".student-card");

    cards.forEach((card) => {
      const searchField = isFilteringByPlan
        ? card.querySelector(".student-plan").textContent.toLowerCase()
        : card.querySelector(".student-name").textContent.toLowerCase();
      card.style.display =
        searchTerm === "" || searchField.includes(searchTerm) ? "flex" : "none";
    });
  });

  filterPlanBtn.addEventListener("click", function () {
    isFilteringByPlan = !isFilteringByPlan;
    updateSearchPlaceholder();
  });

  logoutBtn.addEventListener("click", function () {
    Auth.logout();
    window.location.href = "login.html";
  });

  openBtn.addEventListener("click", function () {
    window.location.href = "cadastro-aluno.html";
  });

  renderStudents();

  window.__DASHBOARD_HELPERS__ = { getAlunos, setAlunos };
});
