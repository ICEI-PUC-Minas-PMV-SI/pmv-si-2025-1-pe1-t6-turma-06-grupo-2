document.getElementById('btn-voltar').onclick = function() {
	window.location.href = 'dashboard.html';
};
document.getElementById('cadastro-upload-btn').onclick = function() {
	document.getElementById('cadastro-photo').click();
};
document.getElementById('cadastro-photo').onchange = function(e) {
	const file = e.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (ev) => {
			document.getElementById('cadastro-photo-preview').src = ev.target.result;
		};
		reader.readAsDataURL(file);
	}
};
document.getElementById('cadastroAlunoForm').onsubmit = function(e) {
	e.preventDefault();
	const inputs = this.querySelectorAll('input-component');
	let isValid = true;
	inputs.forEach(input => {
		const inputElement = input.shadowRoot.querySelector('input');
		if (!inputElement.value.trim()) {
			isValid = false;
		} 
	});

	if (!isValid) {
		alert('Por favor, preencha todos os campos obrigatórios.');
		return;
	}

	let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
	const aluno = {
		nome: document.getElementById('cadastro-nome').shadowRoot.querySelector('input').value.trim(),
		matricula: document.getElementById('cadastro-matricula').shadowRoot.querySelector('input').value.trim(),
		plano: document.getElementById('cadastro-plano').shadowRoot.querySelector('input').value.trim(),
		vencimento: document.getElementById('cadastro-vencimento').shadowRoot.querySelector('input').value.trim(),
		peso: document.getElementById('cadastro-peso').shadowRoot.querySelector('input').value.trim(),
		altura: document.getElementById('cadastro-altura').shadowRoot.querySelector('input').value.trim(),
		telefone: document.getElementById('cadastro-telefone').shadowRoot.querySelector('input').value.trim(),
		foto: document.getElementById('cadastro-photo-preview').src,
	};
	alunos.push(aluno);
	localStorage.setItem('alunos', JSON.stringify(alunos));
	window.location.href = 'dashboard.html';
};