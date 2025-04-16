function survey(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {
        name: formData.get("name"),
        major: formData.get("major"),
        id_number: formData.get("id-number"),
        class: formData.get("class"),
        email: formData.get("email"),
        answers: []
    };

    // Send data to server
    fetch("/submit-data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then((response) => response.text())
        .then((message) => alert(message))
        .catch((error) => console.error("❌ Error submitting survey:", error));

    window.location.href = "tracno.html";
}