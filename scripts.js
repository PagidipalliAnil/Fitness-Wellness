// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") 
        ? "Light Mode" 
        : "Dark Mode";
});

// Load Random Tip if on Exercise Tips Page
const exerciseTipElement = document.getElementById("exercise-tip");
if (exerciseTipElement) {
    const tips = [
        "Stay hydrated and drink water during workouts!",
        "Warm-up before exercises to avoid injuries.",
        "Include a mix of cardio and strength training.",
        "Aim for consistency over intensity to see results.",
        "Don't forget to cool down and stretch after exercising."
    ];

    function loadRandomTip() {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        exerciseTipElement.textContent = randomTip;
    }

    // Load a random tip
    loadRandomTip();
}
