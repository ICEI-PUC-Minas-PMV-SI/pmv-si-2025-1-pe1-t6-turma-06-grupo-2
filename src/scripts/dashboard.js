const usuarioAtual = Auth.getUsuarioAtual();
if (!usuarioAtual) {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const studentsGrid = document.querySelector(".students-grid");
  const openBtn = document.querySelector(".btn-white");
  const searchInput = document.querySelector(".search-input");
  const logoutBtn = document.querySelector(".logout-btn");
  const filterPlanBtn = document.querySelector(
    ".dashboard-actions .btn-outline:nth-child(3)"
  );

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

  let isFilteringByPlan = false;

  document.querySelector(".dashboard-title").textContent =
    "FitControl - " + usuarioAtual.empresa;

  function renderStudents() {
    const alunos = usuarioAtual.alunos || [];
    console.log("Alunos:", alunos);

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
          usuarioAtual.alunos.splice(idx, 1);
          Auth.atualizarUsuarioAtual(usuarioAtual);
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
});
