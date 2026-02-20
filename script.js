function checkMood(mood) {

    let message = "";

    if (mood === "happy")
        message = "That's amazing! Keep smiling 😊";

    else if (mood === "sad")
        message = "It's okay to feel sad. Better days are coming 💛";

    else if (mood === "angry")
        message = "Take a deep breath. You are stronger than this 😌";

    else if (mood === "tired")
        message = "You deserve rest. Drink water and relax 💤";

    else if (mood === "okay")
        message = "You’re doing good. Keep going 👍";
    else if (mood==="exhausted")
        message="Pause,recharge and rise again";

    document.getElementById("message").innerText = message;
    sendMood(mood);
}
function sendMood(mood) {
    fetch("http://localhost:3000/saveMood", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ mood: mood })
    })
    .then(res => res.text())
    .then(data => console.log(data));
}
