// Declare variables
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get HTML elements
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");
const refresh = document.getElementById("refresh");
const progressBar = document.getElementById("progress-bar");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

// Function to check the guess
function checkGuess() {
    const userValue = Number(guess.value);
    attempts++;

    const difference = Math.abs(userValue - randomNum);
    let progress = 100 - difference; // Closer guess gives higher progress
    progressBar.value = progress > 0 ? progress : 0; // Ensure it doesn't go below 0

    if (userValue === randomNum) {
        hint.textContent = "Yes! Tebakan kamu benar, mantap!";
        hint.style.color = "#4caf50"; // Green for correct guess
        progressBar.value = 100; // Set progress to 100% if correct
        correctSound.play(); // Play correct sound
        hint.style.animation = "bounce 1s"; // Add animation
    } else {
        wrongSound.play(); // Play wrong sound
        hint.style.color = "#ff0000"; // Red for wrong guess
        hint.style.animation = "shake 0.5s"; // Add shake animation

        if (difference <= 5) {
            hint.textContent = "Gila! Udah deket banget, sedikit lagi!";
        } else if (difference <= 10) {
            hint.textContent = "Wih, hampir aja! Ayo, coba dikit lagi.";
        } else if (difference <= 20) {
            hint.textContent = "Hmm, udah agak deket nih, coba lagi yuk!";
        } else if (difference <= 30) {
            hint.textContent = "Yah, masih agak jauh sih, semangat!";
        } else {
            hint.textContent = "Waduh, jauh banget nih! Ayo fokus lagi!";
        }
    }

    // Tampilkan jumlah percobaan
    attemptsText.textContent = "Jumlah Percobaan: " + attempts;
}

// Event Listener for button click
submit.addEventListener("click", checkGuess);

// Event Listener for Enter key
guess.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess(); // Panggil fungsi checkGuess langsung
    }
});

// Event Listener for Refresh button
refresh.addEventListener("click", function() {
    location.reload(); // Reload halaman ketika tombol refresh diklik
});
