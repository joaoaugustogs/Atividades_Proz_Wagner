
async function buscarUsuario() {
    const id = document.getElementById("userId").value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (!id) {
        resultado.innerHTML = "<p class='error'>Por favor, insira um ID.</p>";
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        

        if (response.ok) {
            const data = await response.json();
            mostrarUsuario(data);
        } else {
            throw new Error("Usuário não encontrado.");
        }
    } catch (error) {

        resultado.innerHTML = `<p class='error'>${error.message}</p>`;
    }
}

function mostrarUsuario(usuario) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h3>${usuario.name}</h3>
        <p><strong>ID:</strong> ${usuario.id}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Telefone:</strong> ${usuario.phone}</p>
        <p><strong>Website:</strong> ${usuario.website}</p>
    `;
}
