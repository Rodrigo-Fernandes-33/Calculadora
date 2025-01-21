// Função para adicionar valores na tela
function appendValue(value) {
    let screen = document.getElementById('screen');
    screen.value += value;
}

// Função para limpar a tela
function clearScreen() {
    document.getElementById('screen').value = '';
}

// Função para apagar o último caractere
function backspace() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

// Função para calcular o resultado
function calculate() {
    let screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value); // Calcula a expressão
    } catch (error) {
        screen.value = 'Erro'; // Exibe "Erro" em caso de sintaxe inválida
    }
}
