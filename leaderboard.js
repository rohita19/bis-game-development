window.onload = function () {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    let leaderboard = document.getElementById("leaderboard");

    leaderboard.innerHTML = "<h2>Leaderboard</h2>";

    if (scores.length === 0) {
        leaderboard.innerHTML += "<p>No scores yet.</p>";
    } else {
        scores.sort((a, b) => b.score - a.score); // Highest first
        scores.forEach((entry, index) => {
            let scoreItem = document.createElement("p");
            scoreItem.textContent = `#${index + 1} - ${entry.name}: ${entry.score}`;
            scoreItem.classList.add("fade-in"); // Apply animation
            leaderboard.appendChild(scoreItem);
        });
    }

    // Reset Button
    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset Leaderboard";
    resetBtn.onclick = function () {
        localStorage.removeItem("scores");
        location.reload();
    };
    resetBtn.classList.add("reset-btn");
    leaderboard.appendChild(resetBtn);
};



