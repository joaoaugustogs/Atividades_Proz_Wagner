function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais (caso inválido)
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    // Verifica o primeiro dígito verificador
    if (parseInt(cpf.charAt(9)) !== digito1) {
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    // Verifica o segundo dígito verificador
    if (parseInt(cpf.charAt(10)) !== digito2) {
        return false;
    }

    // Se passou por todas as verificações, o CPF é válido
    return true;
}

// Exemplo de uso
let cpf = "123.456.789-09";
if (validarCPF(cpf)) {
    console.log("CPF válido!");
} else {
    console.log("CPF inválido!");
}