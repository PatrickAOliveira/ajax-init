/*
document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("btn-buscar-cep")
		.addEventListener("click", function () {
			const xhttp = new XMLHttpRequest();
			const cep = document.getElementById("cep").value;
			const endPoint = `https://viacep.com.br/ws/${cep}/json`;

			xhttp.open("GET", endPoint);
			xhttp.send();
		});
});
*/

$(document).ready(() => {
	$("#cep").mask("00000-000");

	$("#btn-buscar-cep").click(function () {
		const cep = $("#cep").val();
		const endpoint = `https://viacep.com.br/ws/${cep}/json`;
		$(this).find("i").addClass("d-none");
		$(this).find("span").removeClass("d-none");

		// $.ajax(endpoint).done((e) => {
		// 	const logradouro = e.logradouro;
		// 	const bairro = e.bairro;
		// 	const cidade = e.localidade;
		// 	const estado = e.uf;
		// 	const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
		// 	$("#endereco").val(endereco);

		// 	setTimeout(() => {
		// 		$(this).find("i").removeClass("d-none");
		// 		$(this).find("span").addClass("d-none");
		// 	}, 2000);
		// });

		fetch(endpoint)
			.then((resposta) => {
				return resposta.json();
			})
			.then((json) => {
				const logradouro = json.logradouro;
				const bairro = json.bairro;
				const cidade = json.localidade;
				const estado = json.uf;
				const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
				$("#endereco").val(endereco);
			})
			.catch((error) => {
				alert(
					"Ocorreu um erro ao buscar o endereço, tente novamente mais tarde"
				);
			})
			.finally(() => {
				setTimeout(() => {
					$(this).find("i").removeClass("d-none");
					$(this).find("span").addClass("d-none");
				}, 1000);
			});
	});
});
