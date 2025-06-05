const hints = [
    "Primeira dica: Esta é a dica 1.",
    "Segunda dica: Esta é a dica 2.",
    "Terceira dica: Esta é a dica 3.",
    "Quarta dica: Esta é a dica 4."
];

const correctAnswer = "Resposta Correta";
let attemptsLeft = 5;

document.getElementById("submit-button").addEventListener("click", () => {
    const userGuess = document.getElementById("guess-input").value;
    const feedback = document.getElementById("feedback");
    const attempts = document.getElementById("attempts-left");
    
    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";
        document.getElementById("guess-input").disabled = true;
        document.getElementById("submit-button").disabled = true;
        return;
    }

    attemptsLeft--;
    attempts.textContent = `Tentativas restantes: ${attemptsLeft}`;

    if (attemptsLeft > 0) {
        feedback.textContent = "Errado! Tente novamente.";
        feedback.style.color = "red";
        document.getElementById(`hint${5 - attemptsLeft}`).style.display = "block";
    } else {
        feedback.textContent = "Game Over! Você não acertou.";
        feedback.style.color = "red";
        document.getElementById("guess-input").disabled = true;
        document.getElementById("submit-button").disabled = true;
    }
});
