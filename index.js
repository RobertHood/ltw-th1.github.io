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

    // Collect answers
    document.querySelectorAll(".part").forEach((part, index) => {
        const questionNo = `Q${index + 1}`;
        let answer = "";

        if (part.classList.contains("likert-scale")) {
            answer = part.querySelector("input[type='radio']:checked")?.value || "";
        } else if (part.classList.contains("slider")) {
            answer = part.querySelector("input[type='range']").value;
        } else if (part.classList.contains("skills")) {
            answer = Array.from(part.querySelectorAll("input[type='checkbox']:checked"))
                .map((checkbox) => checkbox.value)
                .join(", ");
        } else if (part.classList.contains("open-answers")) {
            answer = part.querySelector("textarea").value;
        }

        userData.answers.push({ question_no: questionNo, answer });
    });

    // Send data to server
    fetch("/submit-survey", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then((response) => response.text())
        .then((message) => alert(message))
        .catch((error) => console.error("❌ Error submitting survey:", error));
}