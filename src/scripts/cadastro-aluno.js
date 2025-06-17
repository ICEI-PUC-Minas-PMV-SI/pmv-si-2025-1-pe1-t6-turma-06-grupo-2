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

let getAlunos = null;
let setAlunos = null;
if (window.__DASHBOARD_HELPERS__) {
  getAlunos = window.__DASHBOARD_HELPERS__.getAlunos;
  setAlunos = window.__DASHBOARD_HELPERS__.setAlunos;
} else {
  getAlunos = function() {
    if (usuarioAtual.tipo === "funcionario" && adminEmpresa) {
      return adminEmpresa.alunos || [];
    }
    return usuarioAtual.alunos || [];
  };
  setAlunos = function(novosAlunos) {
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
  };
}

const urlParams = new URLSearchParams(window.location.search);
const editIndex = urlParams.get("edit");
let isEditing = editIndex !== null;

document.querySelector('.dashboard-title').textContent = 'FitControl - ' + usuarioAtual.empresa;

document.querySelector(".cadastro-title").textContent = isEditing
  ? "Editar Aluno"
  : "Cadastrar Aluno";
document.querySelector(".cadastro-btn").textContent = isEditing
  ? "Salvar Alterações"
  : "Cadastrar";

function preencherCampos(aluno) {
  if (!aluno) return;

  const campos = {
    "cadastro-nome": aluno.nome,
    "cadastro-matricula": aluno.matricula,
    "cadastro-plano": aluno.plano,
    "cadastro-vencimento": aluno.vencimento,
    "cadastro-peso": aluno.peso,
    "cadastro-altura": aluno.altura,
    "cadastro-telefone": aluno.telefone,
  };

  Object.entries(campos).forEach(([id, valor]) => {
    const input = document
      .getElementById(id)
      ?.shadowRoot?.querySelector("input");
    if (input) {
      input.value = valor;
    }
  });

  const fotoPreview = document.getElementById("cadastro-photo-preview");
  if (fotoPreview && aluno.foto) {
    fotoPreview.src = aluno.foto;
  }
}

if (isEditing) {
  const alunos = getAlunos();
  const aluno = alunos[editIndex];
  if (aluno) {
    setTimeout(() => {
      preencherCampos(aluno);
    }, 100);
  }
}

document.getElementById("btn-voltar").addEventListener("click", function () {
  window.location.href = "dashboard.html";
});

document
  .getElementById("cadastro-upload-btn")
  .addEventListener("click", function () {
    document.getElementById("cadastro-photo").click();
  });

document
  .getElementById("cadastro-photo")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        document.getElementById("cadastro-photo-preview").src =
          ev.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

document
  .getElementById("cadastroAlunoForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = this.querySelectorAll("input-component");
    let isValid = true;
    inputs.forEach((input) => {
      const inputElement = input.shadowRoot.querySelector("input");
      if (!inputElement.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const aluno = {
        nome: document
          .getElementById("cadastro-nome")
          .shadowRoot.querySelector("input")
          .value.trim(),
        matricula: document
          .getElementById("cadastro-matricula")
          .shadowRoot.querySelector("input")
          .value.trim(),
        plano: document
          .getElementById("cadastro-plano")
          .shadowRoot.querySelector("input")
          .value.trim(),
        vencimento: document
          .getElementById("cadastro-vencimento")
          .shadowRoot.querySelector("input")
          .value.trim(),
        peso: document
          .getElementById("cadastro-peso")
          .shadowRoot.querySelector("input")
          .value.trim(),
        altura: document
          .getElementById("cadastro-altura")
          .shadowRoot.querySelector("input")
          .value.trim(),
        telefone: document
          .getElementById("cadastro-telefone")
          .shadowRoot.querySelector("input")
          .value.trim(),
        foto: document.getElementById("cadastro-photo-preview").src,
      };

      let alunos = getAlunos();
      if (isEditing) {
        alunos[editIndex] = aluno;
      } else {
        alunos.push(aluno);
      }
      setAlunos(alunos);

      window.location.replace("dashboard.html");
    } catch (error) {
      console.error("Erro ao cadastrar/editar aluno:", error);
      alert(
        "Ocorreu um erro ao cadastrar/editar o aluno. Por favor, tente novamente."
      );
    }
  });
